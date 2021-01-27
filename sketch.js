var betty;
var blackHood;
var bettyImg, blackHoodImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bettyImg = loadImage("bettyRunning.jpg");
	blackHoodImg = loadImage("blackHood.jpg");
	
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
  betty = createSprite(80, 100, 10, 10);
  betty.addImage(bettyImg);
  betty.scale = 0.5;

  blackHood = createSprite(700, 100, 10, 10);
  blackHood.addImage(blackHoodImg);
  blackHood.scale = 0.13;
  
  drawSprites();
 
}



