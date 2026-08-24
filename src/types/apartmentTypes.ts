export interface ApartmentData {
  id: number;
  area: number;
  rooms: number;
  floor: number;
  price?: number;
  pricePerSquareMeter?: number;
  status?: "available" | "sold" | "reserved";
}

export const APARTMENTS: ApartmentData[] = [
  { id: 101, area: 36.50, rooms: 1, floor: 1, price: 346750, pricePerSquareMeter: 9500, status: "available" },
  { id: 102, area: 48.20, rooms: 2, floor: 1, price: 457900, pricePerSquareMeter: 9500, status: "sold" },
  { id: 103, area: 55.00, rooms: 3, floor: 1, price: 511500, pricePerSquareMeter: 9300, status: "available" },
  { id: 104, area: 64.30, rooms: 3, floor: 1, price: 597990, pricePerSquareMeter: 9300, status: "reserved" },
  { id: 105, area: 72.00, rooms: 4, floor: 1, price: 648000, pricePerSquareMeter: 9000, status: "available" },
  { id: 106, area: 39.00, rooms: 1, floor: 1, price: 374400, pricePerSquareMeter: 9600, status: "available" },
  { id: 107, area: 51.40, rooms: 2, floor: 1, price: 488300, pricePerSquareMeter: 9500, status: "sold" },
  { id: 108, area: 68.00, rooms: 3, floor: 1, price: 632400, pricePerSquareMeter: 9300, status: "available" },
  { id: 109, area: 81.50, rooms: 4, floor: 1, price: 733500, pricePerSquareMeter: 9000, status: "reserved" },
  { id: 110, area: 44.20, rooms: 2, floor: 1, price: 419900, pricePerSquareMeter: 9500, status: "available" },

  { id: 201, area: 36.50, rooms: 1, floor: 2, price: 357700, pricePerSquareMeter: 9800, status: "available" },
  { id: 202, area: 48.20, rooms: 2, floor: 2, price: 472360, pricePerSquareMeter: 9800, status: "available" },
  { id: 203, area: 55.00, rooms: 3, floor: 2, price: 533500, pricePerSquareMeter: 9700, status: "sold" },
  { id: 204, area: 64.30, rooms: 3, floor: 2, price: 623710, pricePerSquareMeter: 9700, status: "available" },
  { id: 205, area: 72.00, rooms: 4, floor: 2, price: 691200, pricePerSquareMeter: 9600, status: "reserved" },
  { id: 206, area: 39.00, rooms: 1, floor: 2, price: 390000, pricePerSquareMeter: 10000, status: "available" },
  { id: 207, area: 51.40, rooms: 2, floor: 2, price: 503720, pricePerSquareMeter: 9800, status: "sold" },
  { id: 208, area: 68.00, rooms: 3, floor: 2, price: 659600, pricePerSquareMeter: 9700, status: "available" },
  { id: 209, area: 81.50, rooms: 4, floor: 2, price: 782400, pricePerSquareMeter: 9600, status: "available" },
  { id: 210, area: 44.20, rooms: 2, floor: 2, price: 433160, pricePerSquareMeter: 9800, status: "reserved" },

  { id: 301, area: 38.00, rooms: 1, floor: 3, price: 399000, pricePerSquareMeter: 10500, status: "available" },
  { id: 302, area: 50.00, rooms: 2, floor: 3, price: 525000, pricePerSquareMeter: 10500, status: "available" },
  { id: 303, area: 58.50, rooms: 3, floor: 3, price: 596700, pricePerSquareMeter: 10200, status: "reserved" },
  { id: 304, area: 70.00, rooms: 3, floor: 3, price: 714000, pricePerSquareMeter: 10200, status: "available" },
  { id: 305, area: 85.00, rooms: 4, floor: 3, price: 892500, pricePerSquareMeter: 10500, status: "sold" },
  { id: 306, area: 42.00, rooms: 2, floor: 3, price: 441000, pricePerSquareMeter: 10500, status: "available" },
  { id: 307, area: 53.20, rooms: 2, floor: 3, price: 558600, pricePerSquareMeter: 10500, status: "available" },
  { id: 308, area: 72.50, rooms: 3, floor: 3, price: 739500, pricePerSquareMeter: 10200, status: "sold" },
  { id: 309, area: 90.00, rooms: 4, floor: 3, price: 945000, pricePerSquareMeter: 10500, status: "available" },
  { id: 310, area: 46.50, rooms: 2, floor: 3, price: 488250, pricePerSquareMeter: 10500, status: "reserved" },
];