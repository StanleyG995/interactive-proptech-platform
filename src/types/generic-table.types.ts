import { ReactNode } from "react";

export interface HeaderItem {
  label: string;
  key: string;
}

export interface GenericTableProps<T> {
  data: T[] | undefined;
  isLoading: boolean;
  error: Error | null;
  headers: HeaderItem[];
  sortCategory?: string;
  sortOrder?: "asc" | "desc";
  onSort?: (key: string) => void;
  renderRow: (item: T, index: number) => ReactNode;
  loadingText?: string;
}
