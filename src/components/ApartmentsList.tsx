'use client';
import { useQuery } from '@tanstack/react-query';
import ApartmentsListItem from "./ApartmentsListItem";
import { ApartmentData } from "@/types/apartmentTypes";

export default function ApartmentsList() {
    const { data: apartments, isLoading, error } = useQuery({
        queryKey: ['apartments'],
        queryFn: async () => {
            const res = await fetch('/api/apartments');
            if (!res.ok) throw new Error('Błąd pobierania danych');
            return res.json();
        },
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading) return <p className="text-center py-4">Ładowanie wszystkich mieszkań...</p>;
    if (error) return <p className="text-center py-4 text-red-500">Błąd: {error.message}</p>;

    return (
        <div className="w-full max-w-[1300px] m-auto h-[400px] overflow-y-auto">
            <table className="w-full border-collapse border border-gray-200 text-zinc-800 text-center">
                <tbody>
                    {apartments?.map((apartment: ApartmentData) => (
                        <ApartmentsListItem key={apartment.id} {...apartment} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}