export function blogOne() {
    var search = window.location.search
    var blogID =  search.replace(/[\D]/g, '')

    const blogOne = Vue.createApp({
        created() {
            fetch(`http://localhost/AnonyGhosts_FoundationSixty6/lumen/public/blog_posts/${blogID}`)
            .then(response => response.json())
            .then(blog => {
                console.log(blog)
                this.blogPost = blog;
            })
            .catch(error => {
                console.log(error)
            })
        },

        data() {
            return {
                blogPost: [],
                id: "",
                title: "",
                description: "",
                author: "",
                date: "",
                text: "",
                image_filename: "",
            }
        },
    })

    blogOne.mount("#app")

    function paragraphBreak() {
        const infoText = document.querySelector("#info-text")
        fetch (`http://localhost/AnonyGhosts_FoundationSixty6/lumen/public/blog_posts/${blogID}`)
        .then(response => response.json())
        .then(text => {
            infoText.innerHTML = text.text
        })
    }

    paragraphBreak()
}