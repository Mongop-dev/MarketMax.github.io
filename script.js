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

var loginform = document.getElementsByClassName('log1')
loginform = onclick(window.href)