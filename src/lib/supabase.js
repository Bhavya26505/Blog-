import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pdwbrfcrplntdpzqwzaf.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkd2JyZmNycGxudGRwenF3emFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MjAxODEsImV4cCI6MjA5MTM5NjE4MX0.4FoivU6PP3LOjCL77TXbbmOn5Qbj9edI7jOJ_8Mzkno";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
