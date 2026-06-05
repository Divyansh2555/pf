document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    const themeBtn = document.getElementById("themeBtn");

    // Mobile Menu Toggle
    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    }

    // Dark / Light Mode Toggle
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {

            const isLight = document.body.classList.toggle("light-mode");

            // icon change (clean logic)
            themeBtn.classList.toggle("fa-moon", !isLight);
            themeBtn.classList.toggle("fa-sun", isLight);

        });
    }

});