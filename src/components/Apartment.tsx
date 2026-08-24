export interface ApartmentData {
  id: number;
  area: number;
  rooms: number;
  floor: number;
  price?: number;
  pricePerSquareMeter?: number;
  status?: "available" | "sold" | "reserved";
}

const Apartment = ({ id, area, rooms, floor, price, pricePerSquareMeter, status }: ApartmentData) => {
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
