// responsive nav
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-list");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const navList = document.querySelector(".nav-list");
    const socialNav = document.querySelector(".social-nav");
    const black = document.querySelector(".black");
    const navLinks = document.querySelectorAll('.nav-links')

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("list-active");
        socialNav.classList.toggle("social-active");
        black.classList.toggle("black-active");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("open");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navList.classList.remove("list-active");
            socialNav.classList.remove("social-active");
            black.classList.remove("black-active");
            menuIcon.classList.remove("hidden");
            closeIcon.classList.remove("open");
        });
    });
});

// date
const date = document.getElementById('date')
const setCurrentYear = () => {
    const currentYear = new Date().getFullYear()
    date.textContent = currentYear
}
setCurrentYear()

// aos
AOS.init()
