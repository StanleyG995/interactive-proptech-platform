import { supabase } from "@/lib/supabase";

export async function getApartments() {
    const { data, error } = await supabase
        .from('apartments')
        .select('*')
        .order('id', { ascending: true });

    if (error) {
        throw new Error(`Supabase error: ${error.message}`);
    }

    if (!data) {
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