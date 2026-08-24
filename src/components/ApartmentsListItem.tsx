import { ApartmentData } from "@/types/apartmentTypes";

const ApartmentsListItem = ({ id, area, rooms, floor, price, pricePerSquareMeter, status }: ApartmentData) => {
  return (
    <tr>
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