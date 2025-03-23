document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Highlight active page
            const currentPage = window.location.pathname.split('/').pop();
            const links = document.querySelectorAll('.nav-links a');
            links.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });

            // Hamburger Menu Toggle
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            const navLinks = document.querySelector('.nav-links');

            hamburgerMenu.addEventListener('click', () => {
                navLinks.classList.toggle('show');
            });
        })
        .catch(error => console.error("Error loading navbar:", error));
});
