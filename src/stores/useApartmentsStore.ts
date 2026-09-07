import { create } from 'zustand';

interface ApartmentsState {
    floor: string | number;
    priceFrom: string | number;
    priceTo: string | number;
    sortCategory: string;
    sortOrder: 'asc' | 'desc';
    // Akcje
    setFloor: (floor: string | number) => void;
    setPriceRange: (from: string | number, to: string | number) => void;
    setSorting: (category: string, order: 'asc' | 'desc') => void;
    resetFilters: () => void;
}

export const useApartmentsStore = create<ApartmentsState>((set) => ({
    floor: '',
    priceFrom: '',
    priceTo: '',
    sortCategory: 'id',
    sortOrder: 'asc',

    setFloor: (floor) => set({ floor }),
    setPriceRange: (priceFrom, priceTo) => set({ priceFrom, priceTo }),
    setSorting: (sortCategory, sortOrder) => set({ sortCategory, sortOrder }),
    resetFilters: () => set({ floor: '', priceFrom: '', priceTo: '', sortCategory: 'id', sortOrder: 'asc' }),
}));