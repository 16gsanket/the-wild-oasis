import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jjptwhdatzanmnnameit.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqcHR3aGRhdHphbm1ubmFtZWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5MDEyODcsImV4cCI6MjAyODQ3NzI4N30.As1WklAGSsV-TSAhnHH28xOJCDxEcBdxlkcHRqLvw2s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
