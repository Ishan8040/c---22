const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var engine,world;
var ground,ball;

function setup() {
  createCanvas(800,400);
  engine= Engine.create()
  world=engine.world
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,800,20,options);
  World.add(world,ground);
 
  var options_ball={
    restitution:0.8
  }
  ball=Bodies.circle(400,100,40,options_ball);
  World.add(world,ball);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  rect(ground.position.x,ground.position.y,800,20);
  drawSprites();
}
