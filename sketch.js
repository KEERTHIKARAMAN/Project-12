var garden,rabbit,apple,leaf,orangeleaf,red;
var gardenImg,rabbitImg;
var appleImg,grassImg,redImg,leafImg,orangeleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png","leaf.png","redImage.png");
  orangeleafImg = loadImage("orangeLeaf.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating sprites
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple = createSprite(200,250,30,30);
apple.scale =0.1;
apple.addImage(appleImg);
apple.velocityY = 5; 

leaf = createSprite(150,50,30,30);
leaf.scale =0.1;
leaf.addImage(leafImg);
leaf.velocityY = 5; 


orangeleaf = createSprite(230,50,30,30);
orangeleaf.scale =0.1;
orangeleaf.addImage(orangeleafImg);
orangeleaf.velocityY = 5; 

apple = createSprite(250,180,30,30);
apple.scale =0.1;
apple.addImage(appleImg);
apple.velocityY = 5; 




}


function draw() {
  background(0);

  createEdgeSprites();

  edges= createEdgeSprites();
  rabbit.collide(edges);
  apple.bounceOff(edges);
  leaf.collide(edges);
  orangeleaf.collide(edges);
  apple.bounceOff(rabbit);

  if (frameCount % 100 === 0){
    leaf = createSprite(80,30)
    leaf.addImage(leafImg)
    leaf.y = random(10,100);
    leaf.velocityY = 3;
    leaf.scale = 0.1
    
  }

  if(keyDown(LEFT_ARROW)) {
    rabbit.velocityX=-2;
    rabbit.velocityY=0;
  }
 
  
  if (keyDown (RIGHT_ARROW)) {
    rabbit.velocityX=2;
    rabbit.velocityY=0;
  }

  drawSprites();
}