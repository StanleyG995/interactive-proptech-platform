import ApartmentsListItem from "./ApartmentsListItem";
import { getApartments } from "@/services/apartmentsService";

export default async function ApartmentsList({ selectedFloor }: { selectedFloor: number | null }) {
    const apartments = await getApartments(selectedFloor);

    return (
        <div className="w-full max-w-[1300px] m-auto h-[400px] overflow-y-auto">
            <table className="w-full border-collapse border border-gray-200 text-zinc-800 text-center">
                
                <tbody>
                    {apartments.map((apartment) => (
                        <ApartmentsListItem key={apartment.id} {...apartment} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}