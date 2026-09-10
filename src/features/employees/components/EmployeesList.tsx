"use client";
import GenericTable from "@/components/GenericTable";
import EmployeesListItem from "@/features/employees/components/EmployeesListItem";
import { useEmployees } from "@/features/employees/hooks/useEmployees";

export default function EmployeesList() {
  const { data, isLoading, error } = useEmployees();
  const headers = [
    { label: "ID", key: "id" },
    { label: "Full name", key: "fullName" },
    { label: "Email", key: "email" },
    { label: "Role", key: "role" },
    { label: "Created at", key: "createdAt" },
  ];

  return (
    <GenericTable
      data={data}
      isLoading={isLoading}
      error={error}
      headers={headers}
      loadingText="Loading employees list..."
      renderRow={(employee) => <EmployeesListItem key={employee.id} {...employee} />}
    />
  );
}