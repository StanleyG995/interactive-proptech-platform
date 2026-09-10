"use client";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ApartmentData } from "@/features/apartments/types/apartment.types";
import { useApartmentsStore } from "@/features/apartments/store/useApartmentsStore";

export function useApartments() {
  const { building, floor, priceFrom, priceTo, sortCategory, sortOrder } =
    useApartmentsStore();

  useEffect(() => {
    const params = new URLSearchParams();
    if (building !== "") params.append("building", String(building));
    if (floor !== "") params.append("floor", String(floor));
    if (priceFrom !== "") params.append("priceFrom", String(priceFrom));
    if (priceTo !== "") params.append("priceTo", String(priceTo));
    if (sortCategory) params.append("sortCategory", sortCategory);
    if (sortOrder) params.append("sortOrder", sortOrder);

    const queryString = params.toString();
    const newUrl = queryString ? `?${queryString}` : window.location.pathname;
    
    window.history.replaceState({}, "", newUrl);
  }, [building, floor, priceFrom, priceTo, sortCategory, sortOrder]);

  return useQuery<ApartmentData[], Error>({
    queryKey: [
      "apartments",
      { building, floor, priceFrom, priceTo, sortCategory, sortOrder },
    ],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (building !== "") params.append("building", String(building));
      if (floor !== "") params.append("floor", String(floor));
      if (priceFrom !== "") params.append("priceFrom", String(priceFrom));
      if (priceTo !== "") params.append("priceTo", String(priceTo));
      if (sortCategory) params.append("sortCategory", sortCategory);
      if (sortOrder) params.append("sortOrder", sortOrder);

      const res = await fetch(`/api/apartments?${params.toString()}`);
      if (!res.ok) throw new Error("Error fetching apartments");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });
}