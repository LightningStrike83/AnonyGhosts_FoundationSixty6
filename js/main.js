(() => {
    const hamMenu = document.querySelector("#hamburger-menu-icon")
    const dropMenu = document.querySelectorAll(".drop-menu")
    const expandedMenu = document.querySelectorAll(".expand-menu")

    function openMobileNav() {
        var headerMenu = document.querySelector("#nav-menu")

        if (headerMenu.style.display === "grid") {
            headerMenu.style.display = "none"
        } else {
            headerMenu.style.display = "grid"
        }
    }

    function openMenu() {
        if (this.id === "about-nav") {
            const aboutMenu = document.querySelector("#about-menu")

            if (aboutMenu.style.display === "flex") {
                aboutMenu.style.display = "none"
            } else {
                expandedMenu.forEach(menu =>{
                    menu.style.display = "none"
                })
                aboutMenu.style.display = "flex"
            }

            
        } else if (this.id === "help-nav") {
            const getHelpMenu = document.querySelector("#get-help-menu")

            if (getHelpMenu.style.display === "flex") {
                getHelpMenu.style.display = "none"
            } else {
                expandedMenu.forEach(menu =>{
                    menu.style.display = "none"
                })
                getHelpMenu.style.display = "flex"
            }

            
        } else if (this.id === "involved-nav") {
            const involvedMenu = document.querySelector("#get-involved-menu")

            if (involvedMenu.style.display === "flex") {
                involvedMenu.style.display = "none"
            } else {
                expandedMenu.forEach(menu =>{
                    menu.style.display = "none"
                })
                involvedMenu.style.display = "flex"
            }
        }
    }

    function openAbout() {
        let aboutMenu = document.querySelector("#about-menu")

        expandedMenu.forEach(menu =>{
            menu.style.display = "none"
        })

        aboutMenu.style.display = "flex"
    }

    dropMenu.forEach(drop => drop.addEventListener("click", openMenu))

    hamMenu.addEventListener("click", openMobileNav)
    //aboutNav.addEventListener("click", openAbout)
    //helpNav.addEventListener("click", openHelp)
    //involvedNav.addEventListener("click", openInvolved)
})();