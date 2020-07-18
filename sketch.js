const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1D, pig1;
var backgroundImg,platform;
var bird, slingShot;
var polygon;
var hexagonimg;
var backgroundImg;

var gameState = "onSling";

function preload() {
    getImg();
    hexagonimg = loadImage("hexagon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
   
    ground1 = new Ground(550,470,500,20);
      
    box1AD = new Block(390,390,60,70);
    box2AD = new Block(455,390,60,70);
    box3AD = new Block(520,390,60,70);
    box4AD = new Block(585,390,60,70);
    box5AD = new Block(650,390,60,70); 
  


    box1D = new Block(390,360,60,70);
    box2D = new Block(455,360,60,70);
    box3D = new Block(520,360,60,70);
    box4D = new Block(585,360,60,70);
    box5D = new Block(650,360,60,70);
    //box6D = new Box(770,320,60,70);
    
    box1M = new Block(455,310,60,70);
    box2M = new Block(519.9,310,60,70);
    box3M = new Block(585,310,60,70);

   box1DL = new Block(490,260,60,70);
    box2DL = new Block(555,260,60,70);

    boxDN = new Block(520,210,60,70);




    

ground = new Ground(600,550,1200,4);

    bird = new Polygon(400,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
  
    if(backgroundImg){background(backgroundImg)}
    Engine.update(engine);

    fill("yellow")
    textSize(15);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",300,50);

    ground1.display();
  
    ground.display();

   box1AD.display();
   box2AD.display();
   box3AD.display();
   box4AD.display();
   box5AD.display();
   
    box1D.display();
    box2D.display();
    box3D.display();
    box4D.display();
    box5D.display();
    
    
    box1M.display();
    box2M.display();
    box3M.display();

    box1DL.display();
    box2DL.display();
    boxDN.display();
    bird.display();
    slingshot.display();

   
  
     
    

 }

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        
        slingshot.attach(bird.body);
       bird.setPosition(bird.body,{x:200,y:50});
       gameState = "launched";
     
    }
}
async function getImg(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responsejson = await response.json();
   var dayTime = responsejson.currentDateTime;
   var hour = dayTime.slice(11,13);
    
   if(hour>=6 && hour>= 18){
       bg ="th.jpg";
   }
     else{
         bg = "hqdefault.jpg";
     }
     backgroundImg = loadImage(bg);
     console.log(dayTime);
  }
  