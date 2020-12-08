const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object;
var ball;

function setup() {
  createCanvas(800,700);

  engine =Engine.create();
  world = engine.world;

  var object_options = {
    isStatic:true
  }
var ballOptions ={
 // restitution:1.0



}
  object = Bodies.rectangle(400,390,800,20,object_options) ;
  World.add(world,object);


  console.log(object);
  
  console.log(object.position.x);
  console.log(object.position.y);
  ball = Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);
}

function draw() {
  background(0);  

  Engine.update(engine);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);


  rectMode(CENTER)
  rect(object.position.x,object.position.y,800,20);

}