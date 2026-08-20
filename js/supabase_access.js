function supabase_access() {
    const SUPABASE_URL = "https://lntwexedkbcrmayltrwo.supabase.co/rest/v1/";
    const SUPABASE_ANON_KEY = "sb_publishable_tvJ9_vYavIo_-6sk_ncudQ_AhDml...";
    const supabase_client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return supabase_client;
}

export default supabase_access;