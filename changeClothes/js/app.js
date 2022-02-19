
let shirt = document.querySelector("#shirt")
let allshirts = ["img/char_shirt1.png", "img/char_shirt3.png", "img/char_shirt2.png"]
let currentPosition = 0

document.addEventListener("click", Change)

function Change(event){
    let targetShirt = event.target
    currentPosition = currentPosition + 1

    if(currentPosition == allshirts.length){
        currentPosition=0
    }
    targetShirt.setAttribute("src", allshirts[currentPosition])
}