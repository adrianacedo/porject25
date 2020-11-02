
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground,trash1,trash2,trash3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200,100,20,20)
	ground = new Ground(400,680,800,20)
	trash1 = new Ground(450,650,20,200)
	trash2 = new Ground(650,650,20,200)
	trash3 = new Ground(550,700,200,20)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
	Engine.update(engine);
	paper1.display();
	trash1.display();
	trash2.display();
	trash3.display();
  drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) { 
		 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85}); 
		}
	 }



