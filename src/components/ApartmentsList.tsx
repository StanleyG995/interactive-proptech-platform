import ApartmentsListItem from "./ApartmentsListItem";

const ApartmentsList = () => {
    return (
        <table className="w-full border-collapse border border-gray-200 text-zinc-800 text-center ">
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
                <ApartmentsListItem id={1} area={75} rooms={3} floor={1} price={150000} pricePerSquareMeter={2000} status="available" />
                <ApartmentsListItem id={2} area={85} rooms={4} floor={2} price={170000} pricePerSquareMeter={2000} status="sold" />
                <ApartmentsListItem id={3} area={65} rooms={2} floor={3} price={130000} pricePerSquareMeter={2000} status="reserved" />
            </tbody>
        </table>
    )
}

export default ApartmentsList;