//declare all the variables
var box;
var bgImage,shipIMG;

function preload(){   //load ALL media like image, gifs, sounds, videos
  //nameOfImage=loadImage("nameOfFILE.ext")
  bgImage=loadImage("space.jpg")
  shipIMG=loadImage("ship.png")
}

function setup() { //In most cases, whatever we need to implement only once, has to be declared in setup
  createCanvas(400,400);
  box=createSprite(200,200,30,30)
  //box.shapeColor = rgb(0,0,255)
  box.addImage(shipIMG)
}

function draw() 
{
  background(bgImage);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x + 5
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x - 5
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y=box.position.y - 5
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y=box.position.y + 5
  }
drawSprites()
}

/*
now, for loading an image, we need 2 instructions:
loadImage-load the image FILE into a variable
addImage-similar to setAnimation
*/



