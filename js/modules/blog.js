export function blogCreation() {
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
                title: "",
                author: "",
                date: "",
            }
        }
    })

    blogPosts.mount("#recent-posts")
}