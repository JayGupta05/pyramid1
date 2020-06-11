var ground,polygon,slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon,{x:100,y:200});
  
  fill("brown");
  ground = new Ground(475,350,250,20);

  fill("lightBlue");
  box1 = new Box(390,320,30,40);
  box2 = new Box(420,320,30,40);
  box3 = new Box(450,320,30,40);
  box4 = new Box(480,320,30,40);
  box5 = new Box(510,320,30,40);
  box6 = new Box(530,320,30,40);
  box7 = new Box(560,320,30,40);
  box8 = new Box(420,280,30,40);
  box9 = new Box(450,280,30,40);
  box10 = new Box(480,280,30,40);
  box11 = new Box(510,280,30,40);
  box12 = new Box(535,280,30,40);
  box13 = new Box(450,240,30,40);
  box14 = new Box(480,240,30,40);
  box15 = new Box(510,240,30,40);
  box16 = new Box(480,200,30,40);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  ground.display();
  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  
  drawSprites();
}