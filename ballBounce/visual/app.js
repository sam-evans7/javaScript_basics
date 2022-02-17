// Create the visuals

//define the ball variables

 var ball ={
   x: 180,
   y: 157,
   Xvelocity: 3,
   Yvelocity: 3,
 }

 // Create container for the ball

function setup(){
 createCanvas (400,300)
};

function draw(){
 //add color to the container that is was created from the setup function
 background(0)
 //create the ball using the variables, x size, y size, height,radius
 circle(ball.x,ball.y,20,20)

 //create movement of the ball using the velocity variables
 ball.x= ball.x + ball.Xvelocity;
 ball.y= ball.y + ball.Yvelocity;

 //stop ball from leaving containers by reversing the velocity in X/Y velocity
  if ((ball.y>height)||(ball.y<0)){
      ball.Yvelocity=ball.Yvelocity * -1
  }
  if ((ball.x>width)||(ball.x<0)){
      ball.Xvelocity =  ball.Xvelocity * -1
  }
}