const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var log1,pig2,pig4,pig5,pig6,pig7;
var platform;
var bird, slingshot;
var gameState="onSling";

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    pig2 = new Log(700,320,65,150);
    pig3 = new Log(920,320,65,150);
    log1 = new Log(810,360,65,150)
    pig5 = new Pig(700,240,70,70);
    pig4 = new Pig(920,240,70,70);
    pig6 = new Pig(810, 220,70,70);
    pig7 = new Log(810,160,65,150);

    bird = new Bird(100,100);

    slingshot= new SlingShot(bird.body,{x:200,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    pig3.display();
    pig4.display();
    ground.display();
  log1.display();
  
    pig5.display();
    pig6.display();
    pig3.display();
 
    pig7.display();
   
    pig2.display();
    bird.display();
    platform.display();
   // log6.display();
    slingshot.display();    
}
function mouseDragged(){
   
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
