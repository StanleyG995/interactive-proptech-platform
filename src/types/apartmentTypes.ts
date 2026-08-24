export interface ApartmentData {
  id: number;
  area: number;
  rooms: number;
  floor: number;
  price?: number;
  pricePerSquareMeter?: number;
  status?: "available" | "sold" | "reserved";
}

