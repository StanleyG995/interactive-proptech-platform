"use client";
import GenericTable from "@/components/GenericTable";
import ApartmentsListItem from "@/features/apartments/components/ApartmentsListItem";
import { useApartments } from "@/features/apartments/hooks/useApartments";
import { useApartmentsStore } from "@/features/apartments/store/useApartmentsStore";

export default function ApartmentsList() {
  const { data, isLoading, error } = useApartments();
  const { sortCategory, sortOrder, setSorting } = useApartmentsStore();

 
  const headers = [
    { label: "Building", key: "building" },
    { label: "Number", key: "number" },
    { label: "Area (m²)", key: "area" },
    { label: "Rooms", key: "rooms" },
    { label: "Floor", key: "floor" },
    { label: "Balcony (m²)", key: "balconyArea" },
    { label: "Price", key: "price" },
    { label: "Price/m²", key: "pricePerSquareMeter" },
    { label: "Status", key: "status" },
  ];

  const handleSort = (key: string) => {
    const newOrder = sortCategory === key && sortOrder === "asc" ? "desc" : "asc";
    setSorting(key, newOrder);
  };

  return (
    <GenericTable
      data={data}
      isLoading={isLoading}
      error={error}
      headers={headers}
      sortCategory={sortCategory}
      sortOrder={sortOrder}
      onSort={handleSort}
      loadingText="Loading apartments list..."
      renderRow={(apartment) => (
        <ApartmentsListItem key={apartment.id} {...apartment} />
      )}
    />
  );
}