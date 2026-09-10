"use client";
import BuildingPlan from "@/components/BuildingPlan";
import ApartmentsList from "@/features/apartments/components/ApartmentsList";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-gray-50 font-sans ">
      <main className="flex flex-col w-full gap-4 m-4">
        <BuildingPlan />
        <ApartmentsList />
      </main>
    </div>
  );
}
