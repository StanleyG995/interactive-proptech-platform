"use client";
import InteractivePlan from "@/components/InteractivePlan";
import ApartmentsList from "@/features/apartments/components/ApartmentsList";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-gray-50 font-sans ">
      <main className="flex flex-col w-full gap-4 m-4">
        <InteractivePlan />
        <ApartmentsList />
      </main>
    </div>
  );
}
