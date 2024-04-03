export function eventInfo() {
    const eventPosts = Vue.createApp({
        created() {
            fetch('http://localhost/AnonyGhosts_FoundationSixty6/lumen/public/events')
            .then(response => response.json())
            .then(event => {
                console.log(event)
                this.eventList = event;
            })
            .catch(error =>
                console.log(error)
            )
        },

        data() {
            return {
                eventList: [],
                id: "",
                title: "",
                place: "",
                description: "",
                date: "",
                time: "",
                image_filename: ""
            }
        }
    })

    eventPosts.mount("#event-info-con")
}