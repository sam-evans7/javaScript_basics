
var x = 0
var radius  = 50
var speed = 4

function setup(){
    createCanvas (500,500)
}

function draw(){
    background(0)
    circle(x,100, radius,radius)

    x = speed + x
    if ( x> width){
        x= 0
    }
}