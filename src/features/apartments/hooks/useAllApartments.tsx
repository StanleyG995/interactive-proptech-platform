"use client";
import { useQuery } from "@tanstack/react-query";
import { ApartmentData } from "@/features/apartments/types/apartment.types";

export function useAllApartments() {
  return useQuery<ApartmentData[], Error>({
    queryKey: ["apartments", "all-plan"],
    queryFn: async () => {
      const res = await fetch(`/api/apartments`);
      if (!res.ok) throw new Error("Error fetching apartments");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });
}