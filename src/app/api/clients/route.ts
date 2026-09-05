import { NextResponse } from 'next/server';
import { getClients } from '@/services/clientsService';

export async function GET() {
  try {
    const clients = await getClients();
    return NextResponse.json(clients);
  } catch (error: unknown) {
    console.error("Błąd bazy danych (clients):", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}