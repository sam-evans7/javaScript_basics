

let Box = document.querySelector("#Box")
let rgbColor = document.querySelector("#rgbColor")
let red = 0
let green = 0
let blue = 0
let rgb = "rgb(" + red +"," + green +"," + blue +")"

rgbColor.innerHTML = "Current Color: " + rgb;

document.addEventListener("click", paintMix)

function paintMix(event){
    let targetButton = event.target
    let color = targetButton.getAttribute("color-edit")
    let amount = targetButton.getAttribute("amount")
    let up = targetButton.getAttribute("up")


    if(color == "red"){
        if(amount == 1){red+= 1}
        else if (amount == 5){red +=5}
        else if(amount == 10){red += 10}
    }

    if(color == "blue"){
        if(amount == 1){blue+= 1}
        else if (amount == 5){blue +=5}
        else if(amount == 10){blue += 10}
    }

    if(color == "green"){
        if(amount == 1){green+= 1}
        else if (amount == 5){green +=5}
        else if(amount == 10){green += 10}
    }

    rgb = "rgb(" + red +"," + green +"," + blue +")"
    Box.style.backgroundColor = rgb
    rgbColor.innerHTML = "Current Color : " +rgb;
}