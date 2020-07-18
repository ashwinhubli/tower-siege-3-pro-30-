class Box2{
    constructor(x,y,width,height) {
      var options = {
          'isStatic': false,
          'restitution':0.8,
          'friction':1.0,
          'density':0.1
  
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
  
    World.add(world, this.body);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
  }
  display(){
  
      push();
    var pos =this.body.position;
    rectMode(CENTER);
    fill(255,146,42);
    stroke('black');
    strokeWeight(5);
    rect(pos.x, pos.y, this.width, this.height);
  pop();  
  
  
  }
}