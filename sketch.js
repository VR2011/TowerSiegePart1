const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var canvas;
var gameState;
var sling;

function preload(){
  bg = loadImage("Bg.png");
}

function setup() {
  canvas = createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(600, 400, 450, 10);
  //Bottom Layer 1
  block = new Block(500, 170, 30, 70);
  block1 = new Block(555, 170, 30, 70);
  block2 = new Block(610, 170, 30, 70);
  block3 = new Block(665, 170, 30, 70);
  block4 = new Block(720, 170, 30, 70);
  //Middle Layer 1
  block5 = new Block(555, 100, 30, 70);
  block6 = new Block(610, 100, 30, 70);
  block7 = new Block(665, 100, 30, 70);
  //Top Layer 1
  block8 = new Block(610,20, 30, 70);

  hexa = new Polygon(300, 50, 75, 50);
  sling = new Slingshot(hexa.body, {x:110, y:100});
  //Platform = new Ground(100, 200, 50, 100);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground1.display();
  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();

  block5.display();
  block6.display();
  block7.display();

  block8.display();
  
  hexa.display();
  sling.display();
  console.log(sling);
  //Platform.display();
  //drawSprites();
}
function mouseDragged(){
      Matter.Body.setPosition(hexa.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
  gameState = "launched";
}