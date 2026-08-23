import BuildingPlan from '@/app/components/BuildingPlan';


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-50 font-sans ">
      <main className="flex">
        <BuildingPlan />
      </main>
    </div>
  );
}
