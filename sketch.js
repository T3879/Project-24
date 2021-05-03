const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,rubber1;
var stone1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    rubber = new Rubber(400,300,20);
   
    
    iron = new Iron(1000,300,50,20);
    stone = new Stone(600,300,70,50);

    marble = new Marble(800,310,10);
    marble1 = new Marble(800,320,10);
    marble2 = new Marble(810,320,10);
    marble3 = new Marble(800,330,10);
    marble4 = new Marble(800,330,10);
    marble5 = new Marble(800,330,10);
    marble6 = new Marble(800,330,10)
    marble7 = new Marble(800,320,10)
    marble8 = new Marble(800,310,10);
    marble9 = new Marble(800,300,10)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   
   rubber.display();

    iron.display();
    stone.display();

    marble.display();
    marble1.display();
    marble2.display();
    marble3.display();
    marble4.display();
    marble5.display();
    marble6.display();
    marble7.display();
    marble8.display();
    marble9.display();
  
    
   
    
 
}