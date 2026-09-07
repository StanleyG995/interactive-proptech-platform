"use client";
import GenericTable from "@/components/GenericTable";
import ClientsListItem from "@/features/clients/components/ClientsListItem";
import { useClients } from "@/features/clients/hooks/useClients";

export default function ClientsList() {
  const { data, isLoading, error } = useClients();
  const headers = ["ID", "Full name", "Email", "Phone", "Created at"];

  return (
    <GenericTable
      data={data}
      isLoading={isLoading}
      error={error}
      headers={headers}
      loadingText="Loading clients list..."
      renderRow={(client) => <ClientsListItem key={client.id} {...client} />}
    />
  );
}
