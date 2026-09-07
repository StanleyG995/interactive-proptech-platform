import { NextResponse } from 'next/server';
import { getEmployees } from '@/features/employees/services/employeesService';

export async function GET() {
  try {
    const employees = await getEmployees();
    return NextResponse.json(employees);
  } catch (error: unknown) {
    console.error("Błąd bazy danych (employees):", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}