//this is where you set all the variables 
var monkey,monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score
var survivalTime=0;
function preload(){
  // this is we load all the pngs and animations 
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
   obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //this where you give the dimensions for the variables
 monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving",monkey_running);
    monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);  
  ground.velocityX=-4;
   ground.x=ground.width/2;
   console.log(ground.x);
  
 foodGroup=new Group();
 obstaclesGroup=new Group();
}


function draw() {
//this is where we call in functions and make conditions 
background(255); 
  
  stroke("white");
  textSize(16);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(16);
  fill("balck");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
   food();
  Obstacles();
drawSprites();
  
}

function food() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(400,100,10,10);
    banana.addImage(bananaImage);
     banana.y=Math.round(random(100,200));
      banana.scale = 0.07;
     banana.velocityX=-4;
   banana.lifetime=90;

  //banana.debug=true;
   
 foodGroup.add(banana);
  }
}

function Obstacles(){
 if (frameCount % 200 === 0){
   var obstacle = createSprite(400,330,10,40);
   obstacle.addImage(obstacleImage);
       obstacle.velocityX = -6;
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;

   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}

