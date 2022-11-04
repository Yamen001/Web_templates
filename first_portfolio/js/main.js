let header = document.querySelector("header")
let logo = document.querySelector("header .container .logo")
let menu = document.querySelector("header .container .menu")
let menu_span = document.querySelectorAll("header .container .menu span")
let logo_mini = document.querySelector("header .container .phone .logo_mini")
let number = document.querySelector("header .container .phone .number")
let open = 0

menu.onclick = function(){
    // console.log(open)
    let list_menu = document.querySelector("header .container .menu_list")
    if(open === 0){
        list_menu.style.height = "330px"
        open = 1;
        // console.log(open)
    }
    else if(open ===1){
        list_menu.style.height = "0px"
        open =0
    }
}

// let linkhover = function(){
//     document.querySelectorAll(".container .list a").forEach((e) =>{
//         e.addEventListener("mouseover",function(){
//             e.style.color = "var(--green)"
//         })
//         e.addEventListener("mouseout",function(){
//             e.style.color = "white"
//         })
//     })
// }
// let linkhover2 = function(){
//     document.querySelectorAll(".container .list a").forEach(function(e){
//         e.addEventListener("mouseover",function(){
//             e.style.color = "var(--green)"
//         })
//         e.addEventListener("mouseout",function(){
//             e.style.color = "black"
//         })
//     })
    
// }


window.onscroll = function(){
    if(scrollY === 0){
        header.style.backgroundColor = "transparent"
        header.style.color = "white"
        header.style.boxShadow = "0px 0px 0px"
        logo.style.color = "white"
        menu_span.forEach((e)=>{e.style.backgroundColor = "white"})

        document.querySelectorAll("header .container .list a").forEach(function(e){
            e.style.color = "white"
        })
        // linkhover()
        document.querySelectorAll("header .container .phone").forEach(function(e){
            e.style.color = "white"
        })
        number.style.borderColor= "white"
        number.style.color = "white"
        logo_mini.style.color = "#aaa"
        logo_mini.style.backgroundColor = "white"
    }
    else{
        logo.style.color = "black"
        menu_span.forEach((e)=>{e.style.backgroundColor = "black"})
        header.style.backgroundColor = "white"
        header.style.color = "black"
        header.style.boxShadow = "0px 10px 10px rgba(95, 95, 95, 0.274)"

        document.querySelectorAll("header .container .list a").forEach(function(e){
            e.style.color = "black"
        })
        // linkhover2()
        number.style.borderColor = "red"
        number.style.color = "var(--green)"
        logo_mini.style.color = "white"
        logo_mini.style.backgroundColor = "var(--green)"
    }
}


let gallary1 = document.querySelectorAll(".projects .container .box .row2 .card")[0]
let gallary2 = document.querySelectorAll(".projects .container .box .row2 .card")[1]
let gallary3 = document.querySelectorAll(".projects .container .box .row2 .card")[2]
let count
gallary1.addEventListener("click",function(){
    // giving the count a number of the card data_number
    count =`gallary${gallary1.dataset.number}`;
    shower_photo()
})
gallary2.addEventListener("click",function(){
    count =`gallary${gallary2.dataset.number}`;
    shower_photo()
})
gallary3.addEventListener("click",function(){
    count =`gallary${gallary3.dataset.number}`;
    shower_photo()
})

let shower_photo = function(){

    // stop scroll behavior
    document.body.style.height = "100vh"
    document.body.style.overflowY = "hidden"

    // create the black shower
    let shower = document.createElement("div")
    shower.className = "shower_dark"
    document.body.appendChild(shower)
    
    // app the pic inside the black shower
    shower.appendChild(pictuer())
    
    // back the scroll behavior
    shower.addEventListener("click",function(){
        shower.style.display = "none"
        document.body.style.height = "auto"
        document.body.style.overflowY = "auto"
    })
}
let pictuer = function(){
    let img = document.createElement("div")

    // add classes img and img_gallary(number of the dataset_number of the card)
    img.classList.add("img")
    img.classList.add(`img_${count}`)
    return img
}