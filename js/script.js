document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.querySelector("nav");
    const themeBtn = document.getElementById("themeBtn");

    // MENU TOGGLE FIXED
    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    // DARK MODE
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {

            const isLight = document.body.classList.toggle("light-mode");

            themeBtn.classList.toggle("fa-moon", !isLight);
            themeBtn.classList.toggle("fa-sun", isLight);

        });
    }

});