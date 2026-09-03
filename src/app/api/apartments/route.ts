import { NextResponse } from 'next/server';
import { getApartments } from '@/services/apartmentsService';

export async function GET() {
  try {
    const apartments = await getApartments();
    return NextResponse.json(apartments);
  } catch (error: unknown) {
    console.error("Błąd bazy danych:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}