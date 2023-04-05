import { createClient } from "@supabase/supabase-js";
const URL = "https://bllwuufzoimkxwgfizpo.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbHd1dWZ6b2lta3h3Z2ZpenBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0NzA1MjgsImV4cCI6MTk5NjA0NjUyOH0.3acRcnk62o-EEh8P_au_6A5G1WXTyJOX-rCrgw94JVs";

export const supabase = createClient(URL, API_KEY);