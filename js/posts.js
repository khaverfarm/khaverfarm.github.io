const posts = data.reverse()
const imgDir = 'images/'
const containsHebrew = /[\u0590-\u05FF]/
const newLine = /\r?\n/

async function populateSidebar() {
    try {
        let sidebarHtml = ""
        posts.forEach(post => {
            sidebarHtml += `<li onclick="populateFullPost(${post.id})">${post.title} - ${post.date}</li>`
        })
        document.getElementById("sidebar").innerHTML = sidebarHtml
        
    } catch (error) {
        console.log(error)  
    }
}

async function populateFullPost(id) {
    try {
        // render most recent post by default
        let post = (id == undefined) ? posts[0] : posts[posts.length - id]  
        // TITLE BLOCK
        let postHtml = `
            <div>
                <div class="flex post-title">
                    <h4>
                        ${post.date}
                    </h4>
                    <h4>
                        ${post.hebrewDate}
                    </h4>
                </div>
                <h2>${post.title}</h2>
            </div>
        `
        // BODY CONTENT
        post.content.split(newLine).forEach(snippet => {
            if (snippet.includes(imgDir)) {
                // render an image
                postHtml += `<img src=${snippet} />`
            } else {
                // render text
                let hebrewClass = (containsHebrew).test(snippet) ? "class='hebrew'" : ""
                postHtml += `<p ${hebrewClass}>${snippet}</p>`
            }
        })
        document.getElementById("post").innerHTML = postHtml 
    } catch (error) {
        console.log(error)  
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    populateSidebar()
    populateFullPost()
})