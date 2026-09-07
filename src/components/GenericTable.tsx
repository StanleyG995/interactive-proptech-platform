import { genericTableProps } from '@/types/generic-table.types';

export default function GenericTable<T>({
    data,
    isLoading,
    error,
    headers,
    renderRow,
    loadingText = 'Loading data...'
}: genericTableProps<T>) {
    if (isLoading) return (
        <div className="w-full max-w-[1300px] m-auto h-[400px] overflow-y-scroll border border-gray-200 rounded-lg shadow-sm bg-white ">
            <table className="w-full h-full border-collapse text-zinc-800 text-left table-fixed">
                <thead className="bg-gray-100 sticky top-0 z-10 border-b border-gray-200 ">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="py-4 px-3 font-semibold text-sm text-zinc-700">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="h-[calc(400px-57px)]">
                    <tr>
                        <td colSpan={headers.length} className="h-full text-center align-middle">
                            <div className="flex justify-center items-center h-full gap-4">
                                <div className="inline-block animate-spin rounded-sm h-3 w-3 bg-[#f0690b]"></div>
                                <div className="inline-block animate-spin rounded-sm h-3 w-3 bg-[#f0690b]"></div>
                                <div className="inline-block animate-spin rounded-sm h-3 w-3 bg-[#f0690b]"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    if (error) return <p className="text-center py-4 text-red-500">Error: {error.message}</p>;
    if (!data || data.length === 0) return <p className="text-center py-4 text-zinc-500">No data to display.</p>;

    return (
        <div className="w-full max-w-[1300px] m-auto h-[400px] overflow-y-scroll border border-gray-200 rounded-lg shadow-sm bg-white ">
            <table className="w-full border-collapse text-zinc-800 text-left table-fixed">
                <thead className="bg-gray-100 sticky top-0 z-10 border-b border-gray-200 ">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="py-4 px-3 font-semibold text-sm text-zinc-700">
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