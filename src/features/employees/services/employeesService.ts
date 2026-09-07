import { supabase } from "@/lib/supabase";

export async function getEmployees() {
    const { data, error } = await supabase
        .from('employees')
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
        fullName: item.full_name,
        email: item.email,
        role: item.role,
        createdAt: item.created_at,
    }));
}