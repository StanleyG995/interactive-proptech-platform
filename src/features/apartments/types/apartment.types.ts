export interface ApartmentData {
  id: string,
  building: string;
  number: string;
  area: number;
  rooms: number;
  floor: number;
  balconyArea: number;
  price?: number;
  pricePerSquareMeter?: number;
  status?: "available" | "sold" | "reserved";
}

