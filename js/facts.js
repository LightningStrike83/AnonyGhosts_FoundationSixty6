export function factsInfo() {
    const factsArea = document.querySelector("#fact-con")

    let facts = [
        {
            fiction: "A fiction",
            fact: "BLAH",
        },

        {
            fiction: "A fiction",
            fact: "BLAH BLAH",
        },

        {
            fiction: "A fiction",
            fact: "BLAH BLAH BLAH",
        },
    ]

    function cardPlacement() {
        facts.forEach(fact => {
            let fictiondiv = document.createElement("div")
            let factdiv = document.createElement("div")
            let facttitle = document.createElement("p")
            let fictiontitle = document.createElement("p")
            let facttext = document.createElement("p")
            let fictiontext = document.createElement("p")
            let textdiv = document.createElement("div")

            fictiondiv.setAttribute("class", "fiction-box")
            factdiv.setAttribute("class", "fact-box")
            facttitle.setAttribute("class", "fact-title")
            facttext.setAttribute("class", "fact-text")
            fictiontitle.setAttribute("class", "fiction-title")
            fictiontext.setAttribute("class", "fiction-text")
            textdiv.setAttribute("class", "ff-div")

            facttext.textContent = fact.fact
            fictiontext.textContent = fact.fiction
            facttitle.textContent = "Fact:"
            fictiontitle.textContent = "Fiction:"

            fictiondiv.appendChild(fictiontitle)
            fictiondiv.appendChild(fictiontext)
            factdiv.appendChild(facttitle)
            factdiv.appendChild(facttext)

            textdiv.appendChild(fictiondiv)
            textdiv.appendChild(factdiv)
            factsArea.appendChild(textdiv)
        })
    }

    cardPlacement();
}