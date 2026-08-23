'use client';
import { useState } from "react";
import { FLOORS } from "@/types/buildingTypes";

const BuildingPlan = () => {
  const [activeFloor, setActiveFloor] = useState<number | null>(null);

  return (
    <div className="building-plan relative w-full">
      <img
        src="/building.webp"
        alt="Building Plan"
        className="w-[80%] m-auto h-auto block"
      />

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
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
        {FLOORS.map((floor) => (
          <path
            key={floor.id}
            d={floor.pathData}
            className="pointer-events-auto cursor-pointer opacity-0 hover:opacity-50 transition-opacity duration-300"
            style={{ fill: "#f0690b" }}
            onClick={() => {
              setActiveFloor(floor.number);
              console.log(`Wybrano piętro: ${floor.number}`);
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default BuildingPlan;
