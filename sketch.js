const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,stone,ground,boy,boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var slingShot;

function preload()
{
	boyImg = loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(50,680,20,20);
	boy.addImage(boyImg);
	boy.scale = 0.03;

	tree = new Tree(700,500,200,500);

	mango1 = new Mango (700,300,10,10);

	mango2 = new Mango( 720,320,10,10);

	mango3 = new Mango( 700,340,10,10);

	mango4 = new Mango( 700,360,10,10);

	mango5 = new Mango( 700,200,10,10);

	mango6 = new Mango( 700,200,10,10);

	mango7 = new Mango( 700,200,10,10);

	stone = new Stone(100,680,10,10);

	ground = new Ground(400,700,800,20);

	slingShot = new Slingshot(stone.body,{x:50,y:180});

	Engine.run(engine);
  
}
	
function draw() {
  rectMode(CENTER);
  background("white");

    tree.display();
    mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	ground.display();
	slingShot.display();
	stone.display();


 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(mango.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
		slingShot.fly();
	}

function detectCollision(stone,mango){
mangoBodyPosition = mango.body.position
stoneBodyPosition = stone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false);
}
}