export function services() {
    const servicesDiv = document.querySelector("#services-info")

    let servicesInfo = [
        // {
        //     title: "",
        //     icon: "",
        //     desc: "",
        //     link: "",
        // },

        {
            title: "Counseling Services",
            icon: "images/dummy.jpg",
            desc: "Provide individual or group counseling sessions facilitated by trained mental health professionals to address specific mental health concerns.",
            link: "Contact Us",
            linkpath: "contact.html",
        },

        {
            title: "Resource and Referral",
            icon: "images/dummy.jpg",
            desc: "Provide information on mental health resources, treatment options, and referrals to other relevant services in the community.",
            link: "Contact Us",
            linkpath: "contact.html",
        },

        {
            title: "Education Programs",
            icon: "images/dummy.jpg",
            desc: "Conduct workshops, seminars, and awareness campaigns to educate the public, schools, and workplaces about mental health issues, reducing stigma, and promoting mental well-being.",
            link: "Learn More",
            linkpath: "events.html",
        },

        {
            title: "Employment & Vocational Support",
            icon: "images/dummy.jpg",
            desc: "Offer programs that help individuals with mental health challenges find and maintain employment, providing vocational training and support.",
            link: "Learn More",
            linkpath: "career-volunteer.html",
        },

        {
            title: "Helpline Services",
            icon: "images/dummy.jpg",
            desc: "Offer a confidential 24/7 phone, text, or online support service for immediate assistance, crisis intervention, and emotional support.",
            link: "Learn More",
            linkpath: "contact.html",
        },

        {
            title: "Community-Based Programs",
            icon: "images/dummy.jpg",
            desc: "Establish residential facilities or community-based programs that offer a supportive environment for individuals with severe mental health conditions.",
            link: "Learn More",
            linkpath: "events.html",
        },
    ]

    function servicesInformation() {
        let i = 0

        servicesInfo.forEach (service => {
            let serviceDiv = document.createElement("div")
            let h3 = document.createElement("h3")
            let img = document.createElement("img")
            let p = document.createElement("p")
            let a = document.createElement("a")
            let div = document.createElement("div")

            div.setAttribute("class", "service-begin")
            serviceDiv.setAttribute("class", "col-span-full m-col-span-5 service-area")
            serviceDiv.setAttribute("id", `service-div-${i++}`)
            a.setAttribute("class", "custom-button")

            h3.textContent = service.title
            img.src = service.icon
            p.textContent = service.desc
            a.href = service.linkpath
            a.textContent = service.link

            div.appendChild(h3)
            div.appendChild(img)
            serviceDiv.appendChild(div)
            serviceDiv.appendChild(p)
            serviceDiv.appendChild(a)

            servicesDiv.appendChild(serviceDiv)
        })
    }

    servicesInformation()
}