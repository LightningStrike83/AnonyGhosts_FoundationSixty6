export function factsInfo() {
    const factsArea = document.querySelector("#fact-con")

    let facts = [
        {
            fiction: "Mental illness is a sign of personal weakness.",
            fact: "Mental illnesses are medical conditions, not character flaws. They can affect anyone regardless of their strength, intelligence, or willpower. Just like physical illnesses, mental illnesses require proper treatment and support.",
            bgi: "monstera.png",
            bgc: "#D7BA64"
        },

        {
            fiction: "People with mental illness are violent and dangerous.",
            fact: "The vast majority of individuals with mental illness are not violent. In fact, they are more likely to be victims of violence rather than perpetrators.",
            bgi: "succulent.png",
            bgc: "#84779B"
        },

        {
            fiction: "Seeking help for mental illness is a sign of weakness or failure.",
            fact: "Seeking help for mental health issues is a sign of strength and courage. It takes bravery to acknowledge when you're struggling and to reach out for support. Just like seeking medical help for a physical illness, seeking treatment for mental illness is essential for recovery and well-being.",
            bgi: "split-leaf.png",
            bgc: "#D47E82"
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
            let shadowdiv = document.createElement("div")

            fictiondiv.setAttribute("class", "fiction-box")
            factdiv.setAttribute("class", "fact-box")
            facttitle.setAttribute("class", "fact-title")
            facttext.setAttribute("class", "fact-text")
            fictiontitle.setAttribute("class", "fiction-title")
            fictiontext.setAttribute("class", "fiction-text")
            textdiv.setAttribute("class", "ff-div")
            textdiv.style.backgroundImage = `url(../images/drawings/${fact.bgi})`
            textdiv.style.backgroundColor = fact.bgc
            shadowdiv.setAttribute("class", "shader")

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
            textdiv.appendChild(shadowdiv)
            factsArea.appendChild(textdiv)
        })
    }

    cardPlacement();
}