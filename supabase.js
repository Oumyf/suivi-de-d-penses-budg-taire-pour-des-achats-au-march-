// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wkwmyofpejlcwtvuhuwc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrd215b2ZwZWpsY3d0dnVodXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzNzcxOTcsImV4cCI6MjAzNjk1MzE5N30.Pi3n1MW7EXQN_6MK27XRAi3Z85lID9E-AgrrBREg-vA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
