import { create } from 'zustand';
import { ApartmentsState } from '@/types/apartments-store.types';

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