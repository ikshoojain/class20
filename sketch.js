var fixedrect, movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(300,200,40,20);
  movingrect = createSprite(500,200,20,40);
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";
  fixedrect.debug = true;
  movingrect.debug = true;


}

function draw() {
  background(255,255,255);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      movingrect.shapeColor = "blue";
      fixedrect.shapeColor = "blue";
    }
    else{
      movingrect.shapeColor = "red";
      fixedrect.shapeColor = "red";
    }
  drawSprites();
}