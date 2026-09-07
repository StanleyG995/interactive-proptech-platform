"use client";
import { useQuery } from "@tanstack/react-query";
import { EmployeeData } from "@/features/employees/types/employee.types";

export function useEmployees() {
  return useQuery<EmployeeData[], Error>({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await fetch("/api/employees");
      if (!res.ok) throw new Error("Error fetching employees");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });
}
