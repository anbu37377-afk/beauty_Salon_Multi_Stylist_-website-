// Main JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-switch');
    const body = document.body;

    // Check local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
            }
        });
    }

    // Sidebar Toggle (Dashboard)
    const sidebarToggle = document.getElementById('menu-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
        });
    }

    // Active Link Highlight
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === "index.html" && href === "/")) {
            link.classList.add('active');
        }
    });

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
