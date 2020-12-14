
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime = 0



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(350,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
 ground = createSprite(400,350,900,10);
 ground.velocityX=-4;
 ground.x=ground.width/2;
 console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
  
  
  

  
}


function draw() {
  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime,100,50);
  
  
  monkey.collide(ground);
  
 
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -12;
    }  
    
     monkey.velocityY = monkey.velocityY + 0.8;
    
    
   
    
    
  
  Food();
  Obstacles();
  

  
  drawSprites();
}

function Food(){
  if (frameCount % 80 === 0){
    
    banana = createSprite(150,180,20,20);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200)); 
    banana.scale=0.1;
    banana.velocityX = 3;
    banana.lifetime = 200;
    
   foodGroup.add(banana);
    
    
  }
  
}

function Obstacles(){
  if(frameCount % 300 ===0){
   
    obstacles = createSprite(390,326,10,10);
    obstacles.addImage(obstacleImage);
    obstacles.velocityX =-3;
    obstacles.lifetime = 300;
    obstacles.scale=0.1;
    
    
     
    
  }
  
}







