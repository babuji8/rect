var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  rect1 = createSprite(120,100,20,100);
  rect1.shapeColor ="yellow";
  rect2 = createSprite(120,700,100,20);
  rect2.shapecolor ="yellow";

  rect2.velocityY = -5;
  rect1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

movingRect.x=mouseX;
movingRect.y=mouseY;

bounceOff(rect1,rect2);

if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="violet";
  fixedRect.shapeColor="peach";
}
else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="orange";
}


 
  drawSprites();
}
