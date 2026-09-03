import { NextResponse } from 'next/server';
import { getApartments } from '@/services/apartmentsService';

export async function GET() {
  try {
    const apartments = await getApartments(null);
    return NextResponse.json(apartments);
  } catch (error) {
    console.error("Błąd bazy danych:", error);
    return NextResponse.json({ error: 'Błąd serwera' }, { status: 500 });
  }
}