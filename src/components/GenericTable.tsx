import React from 'react';
import { GenericTableProps } from '@/types/Generic.types';

export default function GenericTable<T>({
    data,
    isLoading,
    error,
    headers,
    renderRow,
    loadingText = 'Ładowanie danych...'
}: GenericTableProps<T>) {
    if (isLoading) return <p className="text-center py-4 text-zinc-500">{loadingText}</p>;
    if (error) return <p className="text-center py-4 text-red-500">Błąd: {error.message}</p>;
    if (!data || data.length === 0) return <p className="text-center py-4 text-zinc-500">Brak danych do wyświetlenia.</p>;

    return (
        <div className="w-full max-w-[1300px] m-auto h-[400px] overflow-y-auto border border-gray-200 rounded-lg shadow-sm bg-white">
            <table className="w-full border-collapse text-zinc-800 text-center">
                <thead className="bg-gray-100 sticky top-0 z-10 border-b border-gray-200">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="py-3 px-3 font-semibold text-sm text-zinc-700">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {data.map((item, index) => renderRow(item, index))}
                </tbody>
            </table>
        </div>
    );
}