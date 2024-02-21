export function bottomMenu() {
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

    activateButton.addEventListener("click", openBottomMenu)
}
    