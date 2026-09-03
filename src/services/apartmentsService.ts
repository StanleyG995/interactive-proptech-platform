import { supabase } from "@/lib/supabase";

export async function getApartments(floor?: number | string | null) {
    let query = supabase.from('apartments').select('*').order('id', { ascending: true });

    // Konwertujemy na liczbę i sprawdzamy, czy to faktycznie poprawna cyfra
    const parsedFloor = floor !== undefined && floor !== null && floor !== '' ? Number(floor) : null;

    if (parsedFloor !== null && !isNaN(parsedFloor)) {
        query = query.eq('floor', parsedFloor);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Błąd pobierania mieszkań:', error.message);
        return [];
    }

    return data.map((item) => ({
        id: item.id,
        area: item.area,
        rooms: item.rooms,
        floor: item.floor,
        balconyArea: item.balcony_area,
        price: item.price,
        pricePerSquareMeter: item.price_per_square_meter,
        status: item.status,
    }));
}