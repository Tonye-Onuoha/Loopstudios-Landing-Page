const menuOpenIcon = document.querySelector("img[alt='hamburger icon']");
const menuCloseIcon = document.querySelector("img[alt='menu-close icon']");
const mobileMenu = document.querySelector(".mobile-menu");

// This function opens the mobile navigation menu.
const openMenu = () => {
    mobileMenu.style.display = "flex";
};

// This function closes the mobile navigation menu.
const closeMenu = () => {
    mobileMenu.style.display = "none";
};

/* Event Listeners */

menuOpenIcon.addEventListener("click", openMenu);

menuCloseIcon.addEventListener("click", closeMenu);
