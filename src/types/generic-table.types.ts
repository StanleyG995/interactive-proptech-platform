export interface genericTableProps<T> {
    data: T[] | undefined;
    isLoading: boolean;
    error: Error | null;
    headers: string[];
    renderRow: (item: T, index: number) => React.ReactNode;
    loadingText?: string;
    rowClassName?: (item: T, index: number) => string; // <-- Dodane
}