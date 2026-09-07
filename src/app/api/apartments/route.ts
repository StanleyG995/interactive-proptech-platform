import { NextResponse, NextRequest } from "next/server";
import { getApartments } from "@/features/apartments/services/apartmentsService";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const filters = {
      floor: searchParams.get("floor") || undefined,
      priceFrom: searchParams.get("priceFrom") || undefined,
      priceTo: searchParams.get("priceTo") || undefined,
      sortCategory: searchParams.get("sortCategory") || undefined,
      sortOrder: (searchParams.get("sortOrder") as "asc" | "desc") || "asc",
    };

    const apartments = await getApartments(filters);
    return NextResponse.json(apartments);
  } catch (error: unknown) {
    console.error("Błąd bazy danych:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
