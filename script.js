// Initialize AOS (Animate On Scroll) Library
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 800, // Animation duration
        easing: 'ease-in-out',
        once: true, // Whether animation should happen only once - while scrolling down
        offset: 100 // offset (in px) from the original trigger point
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle hamburger icon to 'X' (Optional visual enhancement)
    const icon = mobileMenu.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Dynamic Menu Tabs Logic
function openMenu(evt, menuCategory) {
    // Declare all variables
    let i, menuContent, tabLinks;

    // Get all elements with class="menu-content" and hide them
    menuContent = document.getElementsByClassName("menu-content");
    for (i = 0; i < menuContent.length; i++) {
        menuContent[i].classList.remove("active");
    }

    // Get all elements with class="tab-btn" and remove the class "active"
    tabLinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(menuCategory).classList.add("active");
    evt.currentTarget.classList.add("active");
    
    // Refresh AOS triggers since DOM layout changes
    AOS.refresh();
}

// Array of images
    const images = ["theview.jpeg", "nightview.jpeg"];
    let index = 0;

    // Function to change image
    function changeImage() {
      index = (index + 1) % images.length; // alternate between 0 and 1
      document.getElementById("about-image").src = images[index];
    }

    // Change every 2 seconds (2000 ms)
    setInterval(changeImage, 2000);
