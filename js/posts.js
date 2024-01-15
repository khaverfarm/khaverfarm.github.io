async function populateSidebar() {
    try {
        let result = ""
        posts.reverse().forEach(post => {
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
            post = posts[posts.length - 1]
        } else {
            post = posts[id-1]
        }
        let title = post.title
        let date = post.date
        let hebrewDate = post.hebrewDate
        let content = post.content
        let result = `<h1>${title}</h1><h2>${date}</h2><h2>${hebrewDate}</h2>`
        content.forEach(paragraph => {
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