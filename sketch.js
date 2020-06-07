
var packageBody,ground,paperObject,ground,dust,dust2,dust3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	 paperObject=new Paper(100,400,20);
	 ground=new Ground(400,700,800,20);

	 dust=new Dustbin(600,690,250,20);
	 dust2=new Dustbin(475,650,20,100);
	 dust3=new Dustbin(730,650,20,100);
	 

	Engine.run(engine);
  
}


function draw() {
    Engine.update(engine);
	background(0);
	
	paperObject.display();
	
  ground.display();
  dust.display();
  dust2.display();
  dust3.display();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:65,y:-65});
	}
}



