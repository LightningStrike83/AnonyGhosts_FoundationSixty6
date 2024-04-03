export function blogCreationRecent() {
    const blogPosts = Vue.createApp({
        created() {
            fetch('http://localhost/AnonyGhosts_FoundationSixty6/lumen/public/blog_posts')
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

    blogPosts.mount("#recent-posts")
}