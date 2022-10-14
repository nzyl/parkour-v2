var bg, bgImg;
var r;
var p1,p2,p3,p4,p5,platform,platformGroup;
var plr,plrImg;
var iGround, iB;

function preload() {
  bgImg=loadImage("./assets/bg.png");
  p1=loadImage("./assets/platformVar1.png");
  p2=loadImage("./assets/platformVar2.png");
  p3=loadImage("./assets/platformVar3.png");
  p4=loadImage("./assets/platformVar4.png");
  p5=loadImage("./assets/platformVar5.png");

  plrImg=loadAnimation(
  "./assets/runningFrames/r1.gif",
  "./assets/runningFrames/r2.gif",
  "./assets/runningFrames/r3.gif",
  "./assets/runningFrames/r4.gif",
  "./assets/runningFrames/r5.gif",
  "./assets/runningFrames/r6.gif",
  "./assets/runningFrames/r7.gif",
  "./assets/runningFrames/r8.gif",
  "./assets/runningFrames/r9.gif",
  "./assets/runningFrames/r10.gif",
  "./assets/runningFrames/r11.gif",
  "./assets/runningFrames/r12.gif");
}

function setup() {
  createCanvas( 1800,750);
  bg=createSprite(900,375);
  bg.addImage(bgImg);
  bg.scale=0.8;
  bg.velocityX=-5;
  
  platformGroup=new Group();
  ibGroup=new Group();

  plr=createSprite(100,500,40,40);
  plr.addAnimation("running",plrImg);
  plr.scale=0.6;
  plr.setCollider("rectangle", 0, 0, 150, 500);

  plr.debug=true;

  iGround=createSprite(150,650,300,5);
  iGround.visible=false;

  setTimeout(() => {
    iGround.remove();
  }, 12000);
}

function draw() {
  background(0);  
  
  if(bg.x<400){
    bg.x=width/2;
  }
  
  if(keyDown("space")){
    plr.velocityY=-10;
  }
  plr.velocityY+=0.5;
  

  randomPlatforms();

  plr.collide(iGround);
  plr.collide(ibGroup);

  drawSprites();
}

function randomPlatforms(){
  if(frameCount%80===0){
    platform=createSprite(1800,500,60,60);
    platform.y=Math.round(random(350,600));
    platform.velocityX=-5;
    k = Math.round(random(1,5));
    if(frameCount%80===0){
      
      iB=createSprite(platform.x,platform.y-50,100,2);
      iB.velocityX=-5;
      iB.debug=true;
      ibGroup.add(iB);
    }
    switch(k){
      case 1:
        platform.addImage(p1);
        break;
      case 2:
        platform.addImage(p2);
        break;
      case 3:
        platform.addImage(p3);
        break;
      case 4:
        platform.addImage(p4);
        break;
      case 5:
        platform.addImage(p5);
        break;

      default:break;
      
    }
    platform.scale=0.3;
    platform.lifetime=400;
    platformGroup.add(platform);
  }
}