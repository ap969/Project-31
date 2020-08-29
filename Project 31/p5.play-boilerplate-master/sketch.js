var Engine = Matter.Engine;
 World = Matter.World;
 Events = Matter.Events;
 Bodies = Matter.Bodies;
 var world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight = 300;
var ground;


function setup() {
  createCanvas(800,480);
  engine = Engine.create();
  World = engine.world;
  ground = new Ground(width/2,height,width,20);
  for (var k =0; k<=width; k = k + 80) {
    divisions.push(new Division(k,height.divisionheight/2, 10, divisionheight));
  }
  for (var j = 75; j<= width; j = j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j<= width; j = j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j<= width; j = j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j<= width; j = j+50) {
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(255,255,255);  
Engine.update(engine);
ground.display();
for (var i = 0; i < plinkos.length; i++) {
  plinkos[i].display();
}
if (frameCount%60 === 0) {
  particles.push(new Particle(random(width/2 -30, width/2+30),10,10));
}



for (var j = 0; j < particles.length; j++) {
  particles[j].display();
}

for (var k = 0; k < divisions.length; k++) {
  divisions[k].display();
}

  drawSprites();
}