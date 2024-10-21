// signup.html
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleSignup();
    });

    function handleSignup() {
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || {};
        
        if (users[email]) {
            alert('User already exists. Please login.');
            return;
        }

        users[email] = { fullname, password };
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful. Please login.');
        window.location.href = 'login.html';
    }
});