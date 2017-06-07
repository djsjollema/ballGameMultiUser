var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var velocity = new Vector(1,2);

var ball = new Ball(100,100,15,velocity);

ball.draw(context);
function animate(){
  context.clearRect(0,0,800,600);
  ball.update();
  if(ball.x<ball.r || ball.x > 800 - ball.r){
    ball.velocity.dx = -ball.velocity.dx;
  }
  if(ball.y<ball.r || ball.y > 600 - ball.r){
    ball.velocity.dy = -ball.velocity.dy;
  }
  ball.draw(context);
  ball.velocity.draw(context,ball.x,ball.y,20)
}

setInterval(animate,10);
