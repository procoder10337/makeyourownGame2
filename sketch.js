var bg,bgImg,endImg,startImg;
var marioImg,marioRunningImg;
var odstacleImg1,obstacleImg2,obstacleImg3,player;


function preload(){

  bgImg = loadImage("background.jpg")
  endImg = loadImage("Endimage.jpg")
  startImg = loadImage("startimage.jpg")
  marioImg = loadImage("mario.jpg")
  marioRunningImg = loadImage("marioRunning.jpg")
  obstacleImg1 = loadImage("obstacle1.png")
  obstacleImg2 = loadImage("obstacle2.png")
  obstacleImg3 = loadImage("obstacle3.png")
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  //background image
 bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(mario.jpg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;

//creating mario   
mario = createSprite(100,200,20,50);
mario.addAnimation("mario",marioImg);
mario.scale = 0.2; 

//creating group for obstacle   
    obstacleGroup = new Group();
}



function draw() {
 background(bgImg); 

 //making the mario jump
 if(keyDown("space")) {
  mario.velocityY = -6 ;
  
}

  //adding gravity
  mario.velocityY = mario.velocityY + 2; 


  //destroy zombie when player touches it
if(obstacleGroup.isTouching(mario)){
 

 for(var i=0;i<zombieGroup.length;i++){     
      
  if(zombieGroup[i].isTouching(player)){
       zombieGroup[i].destroy()
       } 
 }
}
 
  //calling the function to spawn obstacle
  obstacle();
  
drawSprites();

}
  

//creating function to spawn obstacle
function enemy(){
  if(frameCount%50===0){ 

 //giving random x and y positions for obstacle to appear
 zombie = createSprite(random(500,1100),random(100,500),40,40)

 obstacle.addImage(obstacleImg)
 obstacle.scale = 0.15
 obstacle.velocityX = -3
 obstacle.debug= true
 obstacle.setCollider("rectangle",0,0,400,400)

 obstacle.lifetime = 400
 obstacleGroup.add(obstacle)
}

}