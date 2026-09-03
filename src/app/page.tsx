"use client";
import BuildingPlan from "@/components/BuildingPlan";
import ApartmentsList from "@/components/ApartmentsList";

export default function Home() {

  return (
    <div className="flex flex-col flex-1 bg-gray-50 font-sans ">
      <main className="flex flex-col w-full">
        <BuildingPlan />
        <ApartmentsList/>
      </main>
    </div>
  );
}
