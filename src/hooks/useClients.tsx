'use client';
import { useQuery } from '@tanstack/react-query';
import { ClientData } from '@/types/client.types';

export function useClients() {
    return useQuery<ClientData[], Error>({
        queryKey: ['clients '],
        queryFn: async () => {
            const res = await fetch('/api/clients');
            if (!res.ok) throw new Error('Error fetching clients');
            return res.json();
        },
        staleTime: 1000 * 60 * 5,
    });
}