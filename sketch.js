var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100, 100, 80, 40);
  car.shapeColor = "yellow";
  car.velocityX=3;

 wall= createSprite(1100, 100, 30, 100);
  wall.shapeColor = "grey";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,wall)){
    car.shapeColor = "red";
    //car.velocityX=0;
  }
  bounceoff(car,wall)
  drawSprites();
}

