import { ApartmentData } from "@/types/apartment.types";

const ApartmentsListItem = ({
  id,
  area,
  rooms,
  floor,
  price,
  pricePerSquareMeter,
  status,
  balconyArea,
}: ApartmentData) => {
  return (
    <tr
      className={`border border-gray-300 p-y-4 hover:bg-gray-100 transition-colors duration-300 ${status === "sold" ? "bg-gray-200 text-gray-500" : ""}`}
    >
      <td className="py-4 px-3">{id}</td>
      <td className="py-4 px-3">{area} m²</td>
      <td className="py-4 px-3">{rooms}</td>
      <td className="py-4 px-3">{floor}</td>
      <td className="py-4 px-3">{balconyArea} m²</td>
      <td className="py-4 px-3">{price ? `${price} PLN` : "-"}</td>
      <td className="py-4 px-3">
        {pricePerSquareMeter ? `${pricePerSquareMeter} PLN/m²` : "-"}
      </td>
      <td
        className={
          `py-4 px-3 uppercase` +
          (status === "available"
            ? " text-green-600"
            : status === "reserved"
              ? " text-yellow-600"
              : " text-red-600")
        }
      >
        {status}
      </td>
    </tr>
  );
};

export default ApartmentsListItem;
