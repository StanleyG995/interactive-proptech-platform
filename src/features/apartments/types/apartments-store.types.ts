export interface ApartmentsState {
    building: string;
    floor: string | number;
    priceFrom: string | number;
    priceTo: string | number;
    sortCategory: string;
    sortOrder: 'asc' | 'desc';
 
    setBuilding: (building: string) => void;
    setFloor: (floor: string | number) => void;
    setPriceRange: (from: string | number, to: string | number) => void;
    setSorting: (category: string, order: 'asc' | 'desc') => void;
    resetFilters: () => void;
}