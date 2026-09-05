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
    <tr>
      <td className="py-4 px-3">{id}</td>
      <td className="py-4 px-3">{area} m²</td>
      <td className="py-4 px-3">{rooms}</td>
      <td className="py-4 px-3">{floor}</td>
      <td className="py-4 px-3">{balconyArea} m²</td>
      <td className="py-4 px-3">{price ? `${price} PLN` : "-"}</td>
      <td>{pricePerSquareMeter ? `${pricePerSquareMeter} PLN/m²` : "-"}</td>
      <td
        className={
          status === "available"
            ? " text-green-600"
            : status === "reserved"
              ? " text-yellow-600"
              : " text-red-600"
        }
      >
        {status}
      </td>
    </tr>
  );
};

export default ApartmentsListItem;
