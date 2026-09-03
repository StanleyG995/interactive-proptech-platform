import { supabase } from "@/lib/supabase";

export async function getApartments() {
    const query = supabase.from('apartments').select('*').order('id', { ascending: true });

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