var monkey,monkey_running,obstacle;
var banana ,bananaImage,obstacleImage,ground,invisibleCealing,cloud;
var bananaGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");  
}



function setup() {
  
  createCanvas(600,600);
  
  monkey=createSprite(80,530,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(300,595,1200,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
    
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
}


function draw() {
    background("lightblue");

   if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -20;
  }
  
  monkey.velocityY = monkey.velocityY + 2; 
  
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    monkey.velocityY = 0;
    ground.velocityX = 0;
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  }
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
  
  
  SpawnObsatcles();
  SpawnFood();
  
  drawSprites();
} 

function SpawnObsatcles(){
  if (frameCount % 200 === 0) {
    //assigning lifetime to the variable
     obstacle = createSprite(590,550,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
    
    obstacleGroup.add(obstacle)
    
    obstacle.velocityX = -7 
        obstacle.lifetime = 204

}
}

function SpawnFood(){
  if (frameCount % 150 === 0){
        banana = createSprite(600,100,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(300,250))
    banana.scale = 0.1;
    banana.velocityX = -7;
  
    bananaGroup.add(banana);
    
    //assigning lifetime to the variable
    banana.lifetime = 250;
  
  } 
  
}