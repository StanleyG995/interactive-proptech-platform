"use client";
import { useState } from "react";
import BuildingPlan from "@/components/BuildingPlan";
import ApartmentsList from "@/components/ApartmentsList";

export default function Home() {

  const [selectedFloor, setSelectedFloor] = useState<number | null>(null);

  return (
    <div className="flex flex-col flex-1 bg-gray-50 font-sans ">
      <main className="flex flex-col w-full">
        <BuildingPlan />
        <ApartmentsList selectedFloor={selectedFloor} />
      </main>
    </div>
  );
}
