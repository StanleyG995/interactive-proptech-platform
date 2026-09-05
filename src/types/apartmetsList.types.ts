import { ApartmentData } from "@/types/apartment.types";

export interface ApartmentsListProps {
    data: ApartmentData[] | undefined;
    isLoading: boolean;
    error: Error | null;
}
