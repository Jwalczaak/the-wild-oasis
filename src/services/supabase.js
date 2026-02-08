import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uqzkufqsdxtfjaxpverg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxemt1ZnFzZHh0ZmpheHB2ZXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4MjM3NjgsImV4cCI6MjA4NTM5OTc2OH0.4KmjsvHOV3sOfLlAMzgJI8gDyGPrsDjl4MqTz75xzMw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
