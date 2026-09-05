'use client';
import { useQuery } from '@tanstack/react-query';
import { ApartmentData } from '@/types/apartment.types';

export function useApartments() {
    return useQuery<ApartmentData[], Error>({
        queryKey: ['apartments'],
        queryFn: async () => {
            const res = await fetch('/api/apartments');
            if (!res.ok) throw new Error('Błąd pobierania danych mieszkań');
            return res.json();
        },
        staleTime: 1000 * 60 * 5,
    });
}