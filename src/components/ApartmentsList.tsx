import ApartmentsListItem from "./ApartmentsListItem";
import { APARTMENTS } from "@/types/apartmentTypes";

const ApartmentsList = () => {
    return (
        <div className="w-full max-w-[1300px] m-auto h-[400px] overflow-y-auto">
            <table className="w-full border-collapse border border-gray-200 text-zinc-800 text-center">
                <thead className="sticky top-0 z-10">
                    <tr className="bg-gray-200 text-zinc-800 font-bold">
                        <th className="border border-gray-300 p-2 cursor-pointer">ID</th>
                        <th className="border border-gray-300 p-2 cursor-pointer">Area (m²)</th>
                        <th className="border border-gray-300 p-2 cursor-pointer">Rooms</th>
                        <th className="border border-gray-300 p-2 cursor-pointer">Floor</th>
                        <th className="border border-gray-300 p-2 cursor-pointer">Balcony Area (m²)</th>
                        <th className="border border-gray-300 p-2 cursor-pointer">Price ($)</th>
                        <th className="border border-gray-300 p-2 cursor-pointer">Price per m² ($)</th>
                        <th className="border border-gray-300 p-2 cursor-pointer">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {APARTMENTS.map((apartment) => (
                        <ApartmentsListItem key={apartment.id} {...apartment} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ApartmentsList;