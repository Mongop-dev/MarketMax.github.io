document.addEventListener('DOMContentLoaded', () => {
    const userFullNameElement = document.getElementById('userFullName');
    const logoutButton = document.getElementById('logoutButton');

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        userFullNameElement.textContent = currentUser.fullname;
    } else {
        window.location.href = 'login.html';
    }

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
});