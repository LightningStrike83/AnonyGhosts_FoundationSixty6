export function careervolunteer() {
    const careerList = Vue.createApp({
        created() {
            fetch('http://localhost/AnonyGhosts_FoundationSixty6/lumen/public/careers')
            .then(response => response.json())
            .then(career => {
                console.log(career)
                this.careerList = career
            })
            .catch(error => {
                console.log(error)
            })
        },

        data() {
            return {
                careerList: [],
                reference: "",
                title: "",
                description: "",
            }
        }
    })

    const volunteerList = Vue.createApp({
        created() {
            fetch('http://localhost/AnonyGhosts_FoundationSixty6/lumen/public/volunteers')
            .then(response => response.json())
            .then(volunteer => {
                console.log(volunteer)
                this.volunteerList = volunteer
            })
            .catch(error => {
                console.log(error)
            })
        },

        data() {
            return {
                volunteerList: [],
                reference: "",
                title: "",
                description: "",
                location: "",
                date: "",
                time: "",
            }
        }
    })

    careerList.mount("#career-opportunities")
    volunteerList.mount("#volunteer-opportunities")
}