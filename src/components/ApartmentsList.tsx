import ApartmentsListItem from "./ApartmentsListItem";
import { APARTMENTS } from "@/types/apartmentTypes";

const ApartmentsList = () => {
    return (
        <table className="w-full max-w-[1200px] m-auto border-collapse border border-gray-200 text-zinc-800 text-center ">
            <thead>
                <tr className="bg-gray-200 text-zinc-800 font-bold">
                    <th className="border border-gray-300 p-2">ID</th>
                    <th className="border border-gray-300 p-2">Area (m²)</th>
                    <th className="border border-gray-300 p-2">Rooms</th>
                    <th className="border border-gray-300 p-2">Floor</th>
                    <th className="border border-gray-300 p-2">Price ($)</th>
                    <th className="border border-gray-300 p-2">Price per m² ($)</th>
                    <th className="border border-gray-300 p-2">Status</th>
                </tr>
            </thead>
            <tbody>
                {APARTMENTS.map((apartment) => (
                    <ApartmentsListItem key={apartment.id} {...apartment} />
                ))}
            </tbody>
        </table>
    )
}

export default ApartmentsList;