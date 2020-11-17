var wall,thickness;
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50,200,40,30)
  bullet.shapeColor=color("pink")
  thickness=random(23,88)
  wall=createSprite(1500,200,thickness,height/2)
  wall.shapeColor=color("white")
  bullet.velocityX=speed;
 
}

function draw() {
  background("black"); 



if(hasCollided(bullet,wall)){
  bullet.velocity.x=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10){
    wall.shapeColor=color(255,0,0)
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }
}

  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}