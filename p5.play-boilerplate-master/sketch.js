var car,wall
var weight


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  car=createSprite(50,200,50,50);
  wall=createSprite(800,400,20,800)
  car.velocityX=random(10,20);
}

function draw() {
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500
    if(deformation>180){
      car.shapecolor="red";
    }
    if(deformation<180&&deformation>100){
      car.shapecolor="yellow"
    }
    if(deformation<100){
      car.shapecolor="green"
    }
  }
  background("black");  
  drawSprites();
}