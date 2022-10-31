let nav_list = document.querySelector("nav .list")
let nav_link = document.querySelector("nav .list-show")

nav_list.onclick = function(){
    let top1 = getComputedStyle(nav_link)
    if(top1.left === "-500px"){
        nav_link.style.left = "50%"
    }
    else{
        nav_link.style.left = "-500px"
    }
}




let count1 = document.querySelector("section.five .row:first-child span")
let count2 = document.querySelector("section.five .row:last-child span")
let sec5 = document.querySelector(".five")
let SpanCounters = [count1 , count2]
let started = false

window.onscroll = function(){
    if(window.scrollY >= sec5.offsetTop){
        if(!started){
            SpanCounters.forEach(e =>{
                startcount(e)
            })
        }
        started = true
    }
}
function startcount(e){
    let goal = e.getAttribute("data-count")
    let count = setInterval(function(){
        e.textContent++;
        if(e.textContent === goal){
            clearInterval(count)
        }
    },2000/goal)
}