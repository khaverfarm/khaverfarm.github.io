async function populateSidebar() {
    try {
        let result = ""
        posts.forEach(post => {
            result += `<li>${post.title}</li>`
        })
        console.log(result)
        document.getElementById("sidebar").innerHTML = result 
        
    } catch (error) {
        console.log(error)  
    }
}


// class Display {
//     displayPost(basket) {
//     //console.log(basket)
//          let result = ""
//         basket.forEach((item)=>{
//         result += `
//         <li>
//         id : ${item.id}
//         name: ${item.name}
//         price: ${item.price}
//         availability: ${item.availability}
//         category : ${item.category}
//         quantity : ${item.quantity}
//         shortDescription : ${item.shortDescription}
//         </li>
//         `})
//         cartItemsList.innerHTML = result 
//     }
// }

document.addEventListener("DOMContentLoaded", ()=>{
    console.log(posts)
    populateSidebar()
    // const basket  = new Basket()
    // const display = new Display()

    // basket.cartItems().then(basket => display.displayBasket(basket))
})