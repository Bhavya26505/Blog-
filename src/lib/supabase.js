import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kkifwcoxrcuolyrgubxb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtraWZ3Y294cmN1b2x5cmd1YnhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMDEzMzAsImV4cCI6MjA3MzY3NzMzMH0.vAsVWVRm3v2LRWM8T-Ej9vIsyecvJ6oyPmbvTSBBRWo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
