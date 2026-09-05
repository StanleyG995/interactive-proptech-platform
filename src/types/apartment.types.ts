export interface ApartmentData {
  id: number;
  area: number;
  rooms: number;
  floor: number;
  balconyArea: number;
  price?: number;
  pricePerSquareMeter?: number;
  status?: "available" | "sold" | "reserved";
}

