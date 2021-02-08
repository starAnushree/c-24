
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

circle(x,y,radius,[options],[maxSides])

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

var options = {
   'density' : 2,
   'friction' : 1.0,
   'restitution' : 0.5
};

var options = {
	restitution : 0.3,
	friction : 5,
	density : 1
 };

 var options = {
	restitution : 1.3,
	friction : 5,
	density : 1
 };










