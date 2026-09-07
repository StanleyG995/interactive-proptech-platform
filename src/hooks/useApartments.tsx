'use client';
import { useQuery } from '@tanstack/react-query';
import { ApartmentData } from '@/types/apartment.types';
import { useApartmentsStore } from '@/store/useApartmentsStore';

export function useApartments() {
    const { floor, priceFrom, priceTo, sortCategory, sortOrder } = useApartmentsStore();

    return useQuery<ApartmentData[], Error>({
        queryKey: ['apartments', { floor, priceFrom, priceTo, sortCategory, sortOrder }],
        queryFn: async () => {
            const params = new URLSearchParams();
            if (floor !== '') params.append('floor', String(floor));
            if (priceFrom !== '') params.append('priceFrom', String(priceFrom));
            if (priceTo !== '') params.append('priceTo', String(priceTo));
            if (sortCategory) params.append('sortCategory', sortCategory);
            if (sortOrder) params.append('sortOrder', sortOrder);

            const res = await fetch(`/api/apartments?${params.toString()}`);
            if (!res.ok) throw new Error('Error fetching apartments');
            return res.json();
        },
        staleTime: 1000 * 60 * 5,
    });
}