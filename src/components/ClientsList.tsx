"use client";
import GenericTable from "@/components/GenericTable";
import ClientsListItem from "@/components/List/Items/ClientsListItem";
import { useClients } from "@/hooks/useClients";

export default function ClientsList() {
  const { data, isLoading, error } = useClients();
  const headers = ["ID", "Full name", "Email", "Phone", "Created at"];

  return (
    <GenericTable
      data={data}
      isLoading={isLoading}
      error={error}
      headers={headers}
      loadingText="Ładowanie listy klientów..."
      renderRow={(client) => <ClientsListItem key={client.id} {...client} />}
    />
  );
}
