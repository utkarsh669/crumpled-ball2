
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,box1,box2,box3;
var ballimage,box2image;
function preload()
{
  //ballimage=loadImage("paper.png");
}

function setup() {
  createCanvas(800, 700)
  
  
  
  engine = Engine.create();

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  
	world = engine.world;
  
box1=createSprite(510,645,20,90)
box2=createSprite(570,680,110,20)
box3=createSprite(620,645,20,90)

	//Create the Bodies Here.

    ball= new Ball (110,490,40,40);
    ground = new Ground(600,height,1200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display()
  ground.display()
  this.loadImage("dustbing.jpg",570,680)
  drawSprites();
  
 
}
function keyPressed() {
if(keyCode === UP_ARROW){

Matter.Body,applyForce(ball.body,ball.body.position,{x:85,y:-85});

}

}
