const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup(){
  var Canvas=createCanvas(800,800)


engine=Engine.create()
world=engine.world
var ground_options={
  isStatic:true
}
var ball_option={
 restitution:1.0
}
ball=Bodies.circle(200,100,20,ball_option)
ground=Bodies.rectangle(200,390,400,10,ground_options)
World.add(world,ground)
World.add(world,ball)
}
function draw(){
  background("green")
  Engine.update(engine)
  rectMode(CENTER)
  ellipseMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipse(ball.position.x,ball.position.y,20)
  
}