"use client";
import BuildingPlan from "@/components/BuildingPlan";
import ApartmentsList from "@/components/ApartmetsList";
import ClientsList from "@/components/ClientsList";
import EmployeesList from "@/components/EmployeesList";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-gray-50 font-sans ">
      <main className="flex flex-col w-full">
        <BuildingPlan />
        <ApartmentsList />
        <ClientsList />
        <EmployeesList/>
      </main>
    </div>
  );
}
