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

    let emergencynumbers = [
        {
            name: "Kids Help Phone",
            number: "1-800-668-6868"
        },

        {
            name: "Good2Talk",
            number: "1-866-925-5454"
        },

        {
            name: "Crisis Support",
            number: "9-8-8"
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
                let darkButton = document.querySelector("#dark-mode img")
                let phoneButton = document.querySelector("#emergency-phone img")

                function darkMode() {
                    let bodyStyle = window.getComputedStyle(document.body);
                    let bodyBackground = bodyStyle.backgroundColor
                    //Note to Professor De Luca; this is still a WIP
                    if (bodyBackground === "rgb(255, 255, 255)") {
                        let darkModeText = document.querySelectorAll(".dmt")
                        let header = document.querySelector("header")
                        let navLinks = document.querySelectorAll("#nav-menu p a")
                        let explore = document.querySelector("#explore")

                        document.body.style.backgroundColor = "#222222"
                        header.style.backgroundColor = "#222222"
                        explore.style.color = "#ffffff"
                        
                        navLinks.forEach(link => {
                            link.style.color = "#ffffff"
                        })

                        darkModeText.forEach(dmt => {
                            dmt.style.color = "#ffffff"
                        })


                    } else if (bodyBackground === "rgb(34, 34, 34)") {
                        let darkModeText = document.querySelectorAll(".dmt")
                        let header = document.querySelector("header")
                        let navLinks = document.querySelectorAll("#nav-menu p a")
                        let explore = document.querySelector("#explore")

                        document.body.style.backgroundColor = "#ffffff"
                        header.style.backgroundColor = "#ffffff"
                        header.style.backgroundColor = "#ffffff"
                        explore.style.color = "#222222"

                        navLinks.forEach(link => {
                            link.style.color = "#222222"
                        })

                        darkModeText.forEach(dmt => {
                            dmt.style.color = "#000000"
                        })
                        console.log("boo")
                    }
                }

                function openNumbers() {
                    if (this.classList.contains("phone-clicked")) {
                        let numberWindow = document.querySelector("#number-window")
                        const emergencyDiv = document.querySelector("#emergency-phone")
                        phoneButton.classList.remove("phone-clicked")

                        numberWindow.remove()
                        
                    } else {
                        const div = document.createElement('div')
                        const emergencyDiv = document.querySelector("#emergency-phone")

                        phoneButton.classList.add("phone-clicked")
                        
                        emergencynumbers.forEach(emergency => {
                            const emergencyTitle = document.createElement('h3')
                            const emergencyNumber = document.createElement('p')

                            emergencyTitle.textContent = emergency.name
                            emergencyNumber.textContent = emergency.number

                            div.appendChild(emergencyTitle)
                            div.appendChild(emergencyNumber)
                        })
                        
                        div.setAttribute("id", "number-window")
                        emergencyDiv.appendChild(div)
                    }

                                       
                }

                darkButton.addEventListener("click", darkMode)
                phoneButton.addEventListener("click", openNumbers)
            }
        } else {
            const closeButton = document.querySelector("#close-button")
            const cloneDivs = document.querySelectorAll(".clone-div")

            activateImage.src = "images/icons/information2.png"

            closeButton.setAttribute("id", "activation-button")

            cloneDivs.forEach(clone =>
                clone.innerHTML = "")
        }
    }

    activateButton.addEventListener("click", openBottomMenu)
}
    