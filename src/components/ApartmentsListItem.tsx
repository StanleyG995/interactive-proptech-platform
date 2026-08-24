import { ApartmentData } from "@/types/apartmentTypes";

const ApartmentsListItem = ({ id, area, rooms, floor, price, pricePerSquareMeter, status }: ApartmentData) => {
  return (
    <tr className={`border border-gray-300 ${status === "sold" ? "bg-red-100" : status === "reserved" ? "bg-yellow-100" : "bg-green-100"}`}>
      <td>{id}</td>
      <td>{area}</td>
      <td>{rooms}</td>
      <td>{floor}</td>
      <td>{price}</td>
      <td>{pricePerSquareMeter}</td>
      <td>{status}</td>
    </tr>
  );
};

export default ApartmentsListItem;