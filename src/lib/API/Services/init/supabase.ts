import { createClient } from '@supabase/supabase-js';

export const SupabaseServerClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

  console.log('supabaseUrl', supabaseUrl);

  return createClient(supabaseUrl, supabaseAnonKey);
};
