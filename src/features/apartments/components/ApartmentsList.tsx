"use client";
import GenericTable from "@/components/GenericTable";
import ApartmentsListItem from "@/features/apartments/components/ApartmentsListItem";
import { useApartments } from "@/features/apartments/hooks/useApartments";

export default function ApartmentsList() {
  const { data, isLoading, error } = useApartments();
  const headers = [
    "Building",
    "Number",
    "Area (m²)",
    "Rooms",
    "Floor",
    "Balcony (m²)",
    "Price",
    "Price/m²",
    "Status",
  ];

  return (
    <GenericTable
      data={data}
      isLoading={isLoading}
      error={error}
      headers={headers}
      loadingText="Loading apartments list..."
      renderRow={(apartment) => (
        <ApartmentsListItem key={apartment.number} {...apartment} />
      )}
    />
  );
}
