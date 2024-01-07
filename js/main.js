(() => {
    const hamMenu = document.querySelector("#hamburger-menu-icon")

    function openMobileNav() {
        var headerMenu = document.querySelector("")

        if (headerMenu.style.display === "grid") {
            headerMenu.style.display = "none"
        } else {
            headerMenu.style.display = "grid"
        }
    }

    hamMenu.addEventListener("click", openMobileNav)

})();