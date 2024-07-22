document.addEventListener('DOMContentLoaded', () => {
    const user = supabase.auth.user();

    if (user) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('product-section').style.display = 'block';
        loadProducts();
    } else {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('product-section').style.display = 'none';
    }
});

async function login(email, password) {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
        console.error('Login error:', error.message);
    } else {
        window.location.reload();
    }
}

async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('Logout error:', error.message);
    } else {
        window.location.reload();
    }
}
