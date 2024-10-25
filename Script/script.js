document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    // For this example, we'll just show a success message
    var messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = 'Thank you for your message. We will get back to you soon!';
    messageDiv.style.backgroundColor = '#dff0d8';
    messageDiv.style.color = '#3c763d';
    messageDiv.style.border = '1px solid #d6e9c6';
    messageDiv.style.borderRadius = '4px';
    
    // Clear the form
    this.reset();
});

// JavaScript for changing images in the slideshow every 4 seconds
let currentImageIndex = 0;
const images = document.querySelectorAll('.slideshow img');
const totalImages = images.length;

function changeImage() {
    // Remove 'active' class from the current image
    images[currentImageIndex].classList.remove('active');

    // Calculate the index of the next image
    currentImageIndex = (currentImageIndex + 1) % totalImages;

    // Add 'active' class to the next image
    images[currentImageIndex].classList.add('active');
}

// Change image every 4 seconds
setInterval(changeImage, 4000);

let scrollTimeout;
const navBar = document.querySelector('.navBar'); // Replace with your navigation bar selector

window.addEventListener('scroll', () => {
    // Clear the previous timeout when the scroll event triggers
    clearTimeout(scrollTimeout);

    // Optional: Add a class while scrolling to apply different styles
    navBar.classList.add('scrolling');

    // Set a new timeout to detect when scrolling has stopped
    scrollTimeout = setTimeout(() => {
        // This code runs after scrolling has stopped for 300ms
        navBar.classList.remove('scrolling'); // Remove the scrolling class
        navBar.style.backgroundColor = '#333'; // Example of changing the nav bar style
    }, 300); // Adjust the delay time as needed
});

function openLoginPage() {
    // URL of your login page
    const loginPageUrl = 'https://example.com/login';

    // Window features (optional)
    const windowFeatures = 'width=500,height=600,resizable=yes,scrollbars=yes';

    // Open the new window
    window.open(loginPageUrl, '_blank', windowFeatures);
}

// Add click event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', openLoginPage);
    }
});

// Check if user is logged in
let isAuthenticated = false;

// Store the current user's data
let currentUser = null;

// List of protected routes/pages
const protectedRoutes = [
    '/dashboard',
    '/payment',
    '/roi-analysis',
    '/social-media',
    '/analytics'
];

// Function to check if the current route is protected
function isProtectedRoute(path) {
    return protectedRoutes.some(route => path.startsWith(route));
}

// Function to check authentication status
function checkAuth() {
    // Check if user has a valid session token in localStorage
    const token = localStorage.getItem('userToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
        isAuthenticated = true;
        currentUser = JSON.parse(userData);
        return true;
    }
    return false;
}

// Function to handle login
function login(username, password) {
    // Add your login logic here (e.g., API call to verify credentials)
    // This is a simplified example
    if (username && password) {
        // Simulate successful login
        const token = 'example-token-' + Math.random();
        const userData = { username: username, id: Date.now() };
        
        // Store auth data
        localStorage.setItem('userToken', token);
        localStorage.setItem('userData', JSON.stringify(userData));
        
        isAuthenticated = true;
        currentUser = userData;
        return true;
    }
    return false;
}

// Function to handle logout
function logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    isAuthenticated = false;
    currentUser = null;
    window.location.href = '/login';
}

// Route protection function
function protectRoute() {
    const currentPath = window.location.pathname;
    
    // Check if current path is a protected route
    if (isProtectedRoute(currentPath)) {
        // If not authenticated, redirect to login
        if (!checkAuth()) {
            // Store the attempted URL to redirect back after login
            localStorage.setItem('redirectUrl', currentPath);
            window.location.href = '/login';
            return false;
        }
    }
    return true;
}

// Event listener for page loads
document.addEventListener('DOMContentLoaded', () => {
    protectRoute();
});

// Event listener for navigation
window.addEventListener('popstate', () => {
    protectRoute();
});

// Function to handle post-login redirect
function handlePostLoginRedirect() {
    const redirectUrl = localStorage.getItem('redirectUrl');
    if (redirectUrl) {
        localStorage.removeItem('redirectUrl');
        window.location.href = redirectUrl;
    } else {
        window.location.href = '/dashboard';
    }
}