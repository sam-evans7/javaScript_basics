
var ball= {
    x:0,
    y:250,
    Xspeed: 3,
    Yspeed: 1
}

function setup(){
    createCanvas(500,500)
}

function draw(){
    background(0)

    ball.x = ball.x + ball.Xspeed //movement of the ball

    for (var i = 0; i < ball.x; i++){
        circle(ball.x, ball.y, i)
    }


}