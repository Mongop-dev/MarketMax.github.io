document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin();
    });

    function handleLogin() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || {};

        if (users[email] && users[email].password === password) {
            // Store only necessary user information
            const currentUser = {
                email: email,
                fullname: users[email].fullname
            };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            // Show alert for successful login
            alert('Login successful! Welcome, ' + users[email].fullname);
            
            // Redirect to welcome page
            window.location.href = 'SignedUser.html';
        } else {
            alert('Invalid email or password.');
        }
    }
});