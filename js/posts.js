// most recent post first
let posts = data.reverse()

async function populateSidebar() {
    try {
        let result = ""
        posts.forEach(post => {
            result += `<li onclick="populateFullPost(${post.id})">${post.title} - ${post.date}</li>`
        })
        document.getElementById("sidebar").innerHTML = result 
        
    } catch (error) {
        console.log(error)  
    }
}

async function populateFullPost(id) {
    try {
        let post
        if (id == undefined) {
            // render most recent post by default
            post = posts[0]
        } else {
            // oldest post has id 1
            post = posts[posts.length - id]
        }
        let result = `<h1>${post.title}</h1><h2>${post.date}</h2><h2>${post.hebrewDate}</h2>`
        post.content.forEach(paragraph => {
            if (paragraph.includes('images/')) {
                let html = `<img src=${paragraph} />`
                result += html
            } else {
                result += `<p>${paragraph}</p>`
            }
        })
        document.getElementById("post").innerHTML = result 
    } catch (error) {
        console.log(error)  
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    populateSidebar()
    populateFullPost()
})