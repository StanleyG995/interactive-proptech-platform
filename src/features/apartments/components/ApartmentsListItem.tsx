import { ApartmentData } from "@/features/apartments/types/apartment.types";

export default function ApartmentsListItem({
    building,
    number,
    area,
    rooms,
    floor,
    price,
    pricePerSquareMeter,
    status,
    balconyArea,
}: ApartmentData) {
    return (
        <>
            <td className="py-4 px-3">{building}</td>
            <td className="py-4 px-3">{number}</td>
            <td className="py-4 px-3">{area} m²</td>
            <td className="py-4 px-3">{rooms}</td>
            <td className="py-4 px-3">{floor}</td>
            <td className="py-4 px-3">{balconyArea} m²</td>
            <td className="py-4 px-3">{price ? `${price} PLN` : "-"}</td>
            <td className="py-4 px-3">
                {pricePerSquareMeter ? `${pricePerSquareMeter} PLN/m²` : "-"}
            </td>
            <td className={
                "py-4 px-3 font-medium" + 
                (status === "available"
                    ? " text-green-600"
                    : status === "reserved"
                        ? " text-yellow-600"
                        : " text-red-600")
            }>
                {status}
            </td>
        </>
    );
}

