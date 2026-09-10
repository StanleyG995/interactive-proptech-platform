import { ApartmentData } from "@/features/apartments/types/apartment.types";
import { supabase } from "@/lib/supabase";

interface ApartmentQueryParams {
    building?: string;
    floor?: string | number;
    priceFrom?: string | number;
    priceTo?: string | number;
    sortCategory?: string;
    sortOrder?: 'asc' | 'desc';
}

interface RawApartmentData {
    id: string;
    building: string;
    number: string;
    area: number;
    rooms: number;
    floor: number;
    balcony_area: number;
    price: number;
    price_per_square_meter: number;
    status: "available" | "sold" | "reserved";
}

export async function getApartments(params?: ApartmentQueryParams) {
    let query = supabase.from('apartments_view').select('*');

    if (params?.floor !== undefined && params.floor !== '' && params.floor !== 'undefined') {
        query = query.eq('floor', Number(params.floor));
    }
  
    if (params?.priceFrom !== undefined && params.priceFrom !== '' && params.priceFrom !== 'undefined') {
        query = query.gte('price', Number(params.priceFrom));
    }
    if (params?.priceTo !== undefined && params.priceTo !== '' && params.priceTo !== 'undefined') {
        query = query.lte('price', Number(params.priceTo));
    }

    if (params?.building !== undefined && params.building !== '' && params.building !== 'undefined') {
        query = query.eq('building', params.building);
    }

    const rawSortCategory = params?.sortCategory || 'building';
    const ascending = params?.sortOrder === 'desc' ? false : true;


    const sortColumnsMap: Record<string, string> = {
        building: 'building',
        number: 'number',
        area: 'area',
        rooms: 'rooms',
        floor: 'floor',
        balconyArea: 'balcony_area',
        price: 'price',
        pricePerSquareMeter: 'price_per_square_meter',
        status: 'status',
    };

    const sortCategory = sortColumnsMap[rawSortCategory] || 'building';

    console.log("Sortowanie po kolumnie DB:", sortCategory);
    query = query.order(sortCategory, { ascending });

    const { data, error } = await query;

    if (error) {
        throw new Error(`Supabase error: ${error.message}`);
    }

    if (!data) {
        return [];
    }

    return data.map((item: RawApartmentData): ApartmentData => ({
        id: item.id,
        building: item.building,
        number: item.number,
        area: item.area,
        rooms: item.rooms,
        floor: item.floor,
        balconyArea: item.balcony_area,
        price: item.price,
        pricePerSquareMeter: item.price_per_square_meter,
        status: item.status,
    }));
}