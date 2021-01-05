const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse= Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine,world;
var Ground,b4,b1,r1,b2,b3,r2,r3,r4;

function preload(){

}

function setup(){
createCanvas(900,800);
 engine=Engine.create();
world=engine.world;
let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio=pixelDensity();
let options = {
    mouse: canvasmouse
}
mConstraint=MouseConstraint.create(engine,options);
World.add(world,mConstraint);
   
Ground= new ground(400,25,400,20);

b1= new Ball(250,200,80,80);
r1= new Rope(b1.body,{x:250,y:40});
b2= new Ball(350,200,80,80);
r2= new Rope(b2.body,{x:350,y:40});
b3= new Ball(450,200,80,80);
r3= new Rope(b3.body,{x:450,y:40});
b4= new Ball(550,200,80,80);
r4= new Rope(b4.body,{x:550,y:40});

 }

function draw(){
 
 background(0);
 Engine.update(engine);
Ground.display();
fill
b4.display();
r4.display();
b1.display();
r1.display();
b2.display();
r2.display();
b3.display();
r3.display();
}
function mouseDragged(){
Matter.Body.setPosition(b1.body,{x:mouseX,y:mouseY});
}