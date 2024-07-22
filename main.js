import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://wkwmyofpejlcwtvuhuwc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrd215b2ZwZWpsY3d0dnVodXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzNzcxOTcsImV4cCI6MjAzNjk1MzE5N30.Pi3n1MW7EXQN_6MK27XRAi3Z85lID9E-AgrrBREg-vA';
        const supabase = createClient(supabaseUrl, supabaseKey);
        
        document.getElementById('signup-form').addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const nom = event.target['nom'].value;
            const prenom = event.target['prenom'].value;
            const email = event.target['email'].value;
            const password = event.target['password'].value;
        
            const { user, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                nom: nom,
                prenom: prenom,

            });
        
            if (error) {
                alert('Erreur d\'inscription : ' + error.message);
            } else {
                alert('Inscription réussie ! Veuillez vérifier votre email pour confirmer.');
                // Optionnel : Rediriger vers la page de connexion
                window.location.href = './index.html';
            }
        });