"use client";
import GenericTable from "@/components/GenericTable";
import EmployeesListItem from "@/components/List/Items/EmployeesListItem";
import { useEmployees } from "@/features/employees/hooks/useEmployees";

export default function EmployeesList() {
  const { data, isLoading, error } = useEmployees();
  const headers = ["ID", "Full name", "Email", "Role", "Created at"];

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
