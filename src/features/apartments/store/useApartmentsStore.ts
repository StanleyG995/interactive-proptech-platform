import { create } from "zustand";
import { ApartmentsState } from "@/features/apartments/types/apartments-store.types";

export const useApartmentsStore = create<ApartmentsState>((set, get) => ({
    building: "",
    floor: "",
    priceFrom: "",
    priceTo: "",
    sortCategory: "",
    sortOrder: "asc",

    setBuilding: (building) => set({ building }),
    setFloor: (floor) => set({ floor }),
    setPriceRange: (priceFrom, priceTo) => set({ priceFrom, priceTo }),
    setSorting: (key) => {
        const { sortCategory, sortOrder } = get();
        const newOrder = sortCategory === key && sortOrder === "asc" ? "desc" : "asc";
        set({ sortCategory: key, sortOrder: newOrder });
    },
    resetFilters: () =>
        set({
            building: "",
            floor: "",
            priceFrom: "",
            priceTo: "",
            sortCategory: "",
            sortOrder: "asc",
        }),
}));