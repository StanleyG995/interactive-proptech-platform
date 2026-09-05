"use client";
import GenericTable from "@/components/GenericTable";
import ApartmentsListItem from "@/components/List/Items/ApartmentsListItem";
import { useApartments } from "@/hooks/useApartments";

export default function ApartmentsList() {
  const { data, isLoading, error } = useApartments();
  const headers = [
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
      loadingText="Ładowanie listy mieszkań..."
      renderRow={(apartment) => (
        <ApartmentsListItem key={apartment.id} {...apartment} />
      )}
    />
  );
}
