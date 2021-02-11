var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle=null;
var plinkos = [];
var divisions=[];
var ground;

var divisionHeight=300;
var score =0;
var particle,turn=0;
var gameState="play";
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(0);
  textSize(20)
  text("Score : "+score,20,30);

  text("500",23,520);
  text("500",103,520);
  text("500",183,520);
  text("500",263,520);
  text("100",343,520);
  text("100",423,520);
  text("100",503,520);
  text("200",583,520);
  text("200",663,520);
  text("200",743,520);

  Engine.update(engine);
 
  ground.display();
  if(gameState=="end"){
    textSize(100);
    text("GAME OVER",120,250);
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();   
   }
   if(particle!==null){
      particle.display();
      if(particle.body.position.y>760){
        if(particle.body.position.x<=300){
          score+=500;
          particle=null;
          if(count>=5){
            gameState="end";
          }
        }
        else if(particle.body.position.x>300 && particle.body.position.x<=600){
          score+=100;
          particle=null;
          if(count>=5){
            gameState="end";
          }
        }
        else if(particle.body.position.x>600 && particle.body.position.x<=900){
          score+=200;
          particle=null;
          if(count>=5){
            gameState="end";
          }
        }
      }
    
  }
}
function mousePressed(){
  if(gameState!=="end"){
    particle=new Particle(mouseX,0,10);
    count++;    
  }
}