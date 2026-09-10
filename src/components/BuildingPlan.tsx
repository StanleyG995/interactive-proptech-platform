/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { FLOORS, FloorData } from "@/types/building.types";
import { useApartmentsStore } from "@/features/apartments/store/useApartmentsStore";
import { useAllApartments } from "@/features/apartments/hooks/useAllApartments";

const BuildingPlan = () => {
  const [activeFloor, setActiveFloor] = useState<FloorData | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const setBuilding = useApartmentsStore((state) => state.setBuilding);
  const setFloor = useApartmentsStore((state) => state.setFloor);
  const { data: apartments = [] } = useAllApartments();

  // Śledzenie pozycji kursora wewnątrz kontenera
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Obliczanie statystyk dla aktywnego piętra
  const getFloorStats = (building: string, floorNumber: number) => {
    const floorApartments = apartments.filter(
      (apt) => apt.building === building && apt.floor === floorNumber,
    );

    const total = floorApartments.length;
    const available = floorApartments.filter(
      (apt) => apt.status === "available",
    ).length;
    const sold = floorApartments.filter((apt) => apt.status === "sold").length;
    const reserved = floorApartments.filter(
      (apt) => apt.status === "reserved",
    ).length;

    return { total, available, sold, reserved };
  };

  const stats = activeFloor
    ? getFloorStats(activeFloor.building, activeFloor.number)
    : null;

  return (
    <div
      className="building-plan relative w-full max-w-[1500px] mx-auto cursor-default"
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full mx-auto">
        <img
          src="/building_new_solid.webp"
          alt="Building Plan"
          className="w-full h-auto block rounded-lg"
        />

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 740"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
          }}
        >
          {FLOORS.map((floor) => {
            const isActive = activeFloor?.id === floor.id;

            return (
              <path
                key={floor.id}
                d={floor.pathData}
                className="pointer-events-auto cursor-pointer transition-opacity duration-300"
                style={{
                  fill: "#f0690b",
                  opacity: isActive ? 0.6 : 0,
                }}
                onMouseEnter={() => setActiveFloor(floor)}
                onMouseLeave={() => setActiveFloor(null)}
                onClick={() => {
                  setBuilding(floor.building);
                  setFloor(floor.number);
                }}
              />
            );
          })}
        </svg>

        {/* Tooltip */}
        {activeFloor && stats && (
          <div
            className="absolute z-50 pointer-events-none bg-white/80 text-zinc-800 rounded-lg shadow-md text-sm backdrop-blur-sm transition-all duration-75 ease-out overflow-hidden"
            style={{
              left: `${mousePos.x + 15}px`,
              top: `${mousePos.y + 15}px`,
              transform: "translate(0, 0)",
            }}
          >
            <div className="flex justify-between items-center bg-black/7 rounded-t-lg">
              <div className="font-semibold text-2xl bg-[#f0690b] px-3 py-2 text-white ">
                {activeFloor.building}
              </div>
              <div className="font-hairline text-lg text-zinc-500/70 uppercase tracking-wider pr-3 py-2">
                P{activeFloor.number}
              </div>
            </div>

            <div className="space-y-1 flex flex-col gap-2 px-3 py-2">
              <div className="flex justify-between text-zinc-600 uppercase text-sm tracking-wider gap-6">
                Wolne{" "}
                <span className="font-bold text-emerald-700">
                  {stats.available}
                </span>
              </div>
              <div className="flex justify-between text-zinc-600 uppercase text-sm tracking-wider gap-6">
                Zarezer.{" "}
                <span className="font-bold text-amber-600">
                  {stats.reserved}
                </span>
              </div>
              <div className="flex justify-between text-zinc-600 uppercase text-sm tracking-wider gap-6">
                Sprzedane{" "}
                <span className="font-bold text-red-700">{stats.sold}</span>
              </div>
              <div className="flex justify-between text-zinc-900 uppercase text-sm tracking-wider gap-6 border-t border-gray-400 pt-2">
                Wszystkie <span className="font-bold">{stats.total}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildingPlan;
