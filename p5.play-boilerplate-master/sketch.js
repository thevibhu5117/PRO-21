var  thickness,wall;
var bullet,speed, weight;
var bulletRightedge,wallLeftedege;


function setup() {

  createCanvas(1600,400);
  bullet=createSprite(40, 165, 50, 50);
  

  wall=createSprite(1200,203,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  


}

function draw() {
  background(7);  
  bullet.velocityX=speed;

  if(hasCollided(wall,bullet)){
    bullet.velocityX=speed;
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }

  }
  text(mouseX +","+mouseY, 200,100)
  
  drawSprites();
 

    }

  

function hasCollided(bullet,wall){
  bulletRightedge=bullet.x+bullet.width;
  wallLeftedege=wall.x;
  if(bulletRightedge>=wallLeftedege){
    return true

  }
  return false


}





