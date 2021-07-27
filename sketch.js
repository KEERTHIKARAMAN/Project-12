var garden,rabbit,apple,leaf,orangeleaf,red;
var gardenImg,rabbitImg;
var appleImg,grassImg,redImg,leafImg,orangeleafImg;

function preload(){

  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");

  leafImg = loadImage("orangeLeaf.png");

  orangeleafImg = loadImage("orangeLeaf.png");

  appleImg = loadImage("apple.png");

  redImg = loadImage("redImage.png");

  redleafImg = loadImage("redImage.png");
  

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



leaf = createSprite(50,50,30,30);
leaf.scale =0.1;
leaf.addImage(leafImg);
leaf.velocityY = 5; 

orangeleaf = createSprite(100,50,30,30);
orangeleaf.scale =0.1;
orangeleaf.addImage(orangeleafImg);
orangeleaf.velocityY = 5; 

apple = createSprite(150,180,30,30);
apple.scale =0.1;
apple.addImage(appleImg);
apple.velocityY = 5; 

red = createSprite(250,180,30,30);
red.scale =0.1;
red.addImage(redImg);
red.velocityY = 5; 

redleafImg = createSprite(300,180,30,30);
redleafImg.scale =0.1;
redleafImg.addImage(redImg);
redleafImg.velocityY = 5; 

}


function draw() {
  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);
  leaf.collide(edges);
  orangeleaf.collide(edges);
  red.collide(edges);
  redleafImg.collide(edges);
  redleafImg.collide(redleafImg);

 

  if (frameCount % 100 === 0){
    leaf = createSprite(80,30)
    leaf.addImage(leafImg)
    leaf.y = random(10,100);
    leaf.velocityY = 3;
    leaf.scale = 0.1;
    
  }

  if (frameCount % 100 === 0){
    red = createSprite(290,.50)
    red.addImage(redImg)
    red.y = random(50,200);
    red.velocityY = 3;
    red.scale = 0.1;
    
  }

  if (frameCount % 100 === 0){
    red = createSprite(290,.50)
    red.addImage(redImg)
    red.y = random(50,200);
    red.velocityY = 3;
    red.scale = 0.1;
    
  }

  if (frameCount % 100 === 0){
    apple = createSprite(200,200)
    apple.addImage(appleImg)
    apple.y = random(50,200);
    apple.velocityY = 3;
    apple.scale = 0.1;
    
  }

  if (frameCount % 100 === 0){
    apple = createSprite(250,200)
    apple.addImage(appleImg)
    apple.y = random(50,200);
    apple.velocityY = 3;
    apple.scale = 0.1;
    
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
