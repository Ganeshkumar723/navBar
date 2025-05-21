document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".navlinks");

    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});