
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1100,200,30);
	mango3=new mango(1000,150,30);
	mango4=new mango(1200,300,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	Stone = new stone(180,340,30)
	slingshot = new Slingshot(Stone.body,{
        x: 240,
        y: 420
    });
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);



  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();


  groundObject.display();
  Stone.display();
  slingshot.display();
}

function mouseDragged(){
	Matter.Body.setPosition(Stone.body,{
		x: mouseX,
		y: mouseY
	})  
  }
  
  function mouseReleased(){
	  slingshot.fly();
  }
  
