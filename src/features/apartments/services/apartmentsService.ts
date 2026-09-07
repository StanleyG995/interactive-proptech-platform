import { supabase } from "@/lib/supabase";

interface ApartmentQueryParams {
    floor?: string | number;
    priceFrom?: string | number;
    priceTo?: string | number;
    sortCategory?: string;
    sortOrder?: 'asc' | 'desc';
}

export async function getApartments(params?: ApartmentQueryParams) {
    let query = supabase.from('apartments').select('*');


    if (params?.floor !== undefined && params.floor !== '' && params.floor !== 'undefined') {
        query = query.eq('floor', Number(params.floor));
    }
  
    if (params?.priceFrom !== undefined && params.priceFrom !== '' && params.priceFrom !== 'undefined') {
        query = query.gte('price', Number(params.priceFrom));
    }
    if (params?.priceTo !== undefined && params.priceTo !== '' && params.priceTo !== 'undefined') {
        query = query.lte('price', Number(params.priceTo));
    }

    const sortCategory = params?.sortCategory || 'id';
    const ascending = params?.sortOrder === 'desc' ? false : true;
    query = query.order(sortCategory, { ascending });

    const { data, error } = await query;

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