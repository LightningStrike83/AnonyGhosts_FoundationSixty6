export function aboutPartners() {
    const partnerDisplay = Vue.createApp ({
        created() {
            fetch('http://localhost/AnonyGhosts_FoundationSixty6/lumen/public/partners')
            .then(response => response.json())
            .then(partner => {
                console.log(partner)
                this.partnerList = partner
            })
            .catch(error => {
                console.log(error)
            })
        },

        data() {
            return {
                partnerList: [],
                name: "",
                image_url: "",
                page_url: ""
            }
        }
    })

    partnerDisplay.mount("#partner-con")
}