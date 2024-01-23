(() => {
    const hamMenu = document.querySelector("#hamburger-menu-icon")
    const dropMenu = document.querySelectorAll(".drop-menu")
    const expandedMenu = document.querySelectorAll(".expand-menu")
    const bottomMenu = document.querySelector("#bottom-menu")
    const activateButton = document.querySelector("#activation-button")
    const activateImage = document.querySelector("#activation-button img")

    let iconpath = [
        {
            path: "dark-mode"
        },

        {
            path: "emergency-phone"
        }
    ]

    function openMobileNav() {
        var headerMenu = document.querySelector("#nav-menu")
        var expandedMenus = document.querySelectorAll(".expand-menu")

        if (headerMenu.style.display === "grid") {
            headerMenu.style.display = "none"
            expandedMenus.forEach(menu => {
                menu.style.display = "none"
            })
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

    function openBottomMenu() {
        if (this.id === "activation-button") {
            let buttonTemplate = document.querySelector("#button-template")

            activateButton.classList.remove("clicked")
            activateImage.src = "images/icons/x-icon.svg"
            activateButton.setAttribute("id", "close-button")

            iconpath.forEach(info => {
                const clone = buttonTemplate.content.cloneNode(true);
                const cloneDiv = clone.querySelector(".clone-div")
                const cloneIMG = clone.querySelector(".clone-img")

                cloneDiv.setAttribute("id", `${info.path}`)
                cloneIMG.setAttribute("class", "bottom-icon")
                cloneIMG.setAttribute("alt", `${info.path} Icon`)
                cloneIMG.src = `images/icons/${info.path}.svg`

                bottomMenu.appendChild(clone)
            })

            {
                let darkButton = document.querySelector("#dark-mode")
                let phoneButton = document.querySelector("#emergency-phone")

                function darkMode() {

                }

                function openNumbers() {

                }

                darkButton.addEventListener("click", darkMode)
                phoneButton.addEventListener("click", openNumbers)
            }
        } else {
            const closeButton = document.querySelector("#close-button")
            const cloneDivs = document.querySelectorAll(".clone-div")

            activateImage.src = "images/icons/image-icon.svg"

            closeButton.setAttribute("id", "activation-button")

            cloneDivs.forEach(clone =>
                clone.innerHTML = "")
        }
    }

    dropMenu.forEach(drop => drop.addEventListener("click", openMenu))

    hamMenu.addEventListener("click", openMobileNav)
    activateButton.addEventListener("click", openBottomMenu)
    //aboutNav.addEventListener("click", openAbout)
    //helpNav.addEventListener("click", openHelp)
    //involvedNav.addEventListener("click", openInvolved)
})();