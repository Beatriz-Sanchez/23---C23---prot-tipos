const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var caixa1;

function setup() {
  var tela = createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  caixa1 = new Caixa(200,50,50,100);
}

function draw() {
  background(0, 0, 50);

  Engine.update(engine);
  
  caixa1.display();
}