/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from "react";
import { FLOORS } from "@/types/building.types";

const BuildingPlan = () => {
  const [activeFloor, setActiveFloor] = useState<number | null>(null);

  return (
    <div className="building-plan relative w-full max-w-[1300px] mx-auto">
      <div className="relative w-full mx-auto">
        <img
          src="/building.webp"
          alt="Building Plan"
          className="w-full h-auto block"
        />

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 740"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
          }}
        >
          {FLOORS.map((floor) => {
            const isActive = activeFloor === floor.number;

            return (
              <path
                key={floor.id}
                d={floor.pathData}
                className="pointer-events-auto cursor-pointer transition-opacity duration-300"
                style={{
                  fill: "#f0690b",
                  opacity: isActive ? 0.6 : 0, 
                }}
                onMouseEnter={() => {
                  setActiveFloor(floor.number);
                }}
                onMouseLeave={() => {
                  setActiveFloor(null);
                }}
                onClick={() => {
                  setActiveFloor(floor.number);
                  console.log(`${floor.number}`);
                }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default BuildingPlan;