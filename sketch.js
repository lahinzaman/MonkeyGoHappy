var bananaImage, obstacleImage, obstacleGroup, background, score, backImage, player_running;

var monkey, bananaGroup, ground;

function preload() {
 backImage=loadImage("jungle.jpg");
 trex_running = 
   loadAnimation("Monkey_01.png,Monkey_02.png Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png");
  
  bananaImage= loadImage("banana.png");
  obstacleImage= loadImage("stone.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  monkey=createSprite(50,180,20,50);
  monkey.addAnimation("running", player_running);
  bananaGroup=new Group();

  obstacleGroup=new Group();
  score=0;
 ground = createSprite(200,180,400,20);
  ground.visible=false;
 background=createSprite(400,400,400,400); 
  background.addAnimation(backImage);
}

function draw() {
  background(220);
  text("Score: "+ score, 250, 100);
  if(keyDown("space")){
      monkey.velocityY = -12 ;
    }
      monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(ground);
  if (monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score=score+2;
  }
  bananas();
  rocks();
  drawSprites();
}


function bananas() {
 
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(300,100));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    bananaGroup.add(banana);
  }
  
}

function rocks() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage("stone.png");
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
