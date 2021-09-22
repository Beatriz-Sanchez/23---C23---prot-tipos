class Caixa {
  constructor(){
    this.body = Bodies.rectangle(200,100,50,50);
    World.add(world,this.body);
    this.width = 50;
    this.height = 50;
  }
  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y, this.width, this.height);
  }
}