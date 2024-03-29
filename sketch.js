const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    bird1 = new Bird(300,470)
    box1 = new Box(600,470,70,70);
    box2 = new Box(800,470,70,70);
    box3 = new Box(600,330,70,70);
    box4 = new Box(800,330,70,70);
    box5 = new Box(700,255,70,70)
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(700,470,50,50);
    pig2 = new Pig(700,350);
    log1 = new Log(700,400,300,PI/2);
    log2 = new Log(700,325,300,PI/2)
    log3 = new Log(630,230,150,PI/7);
    log4 = new Log(750,230,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    bird1.display()
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}