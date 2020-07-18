class Block {
  constructor(x,y,width,height) {
    var options = {
        'isStatic': false,
        'restitution':0.4,
        'friction':0.4,
        'density':0.1

    }
    this.image = loadImage("th (2).jpg");
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
  }
  display(){
    if(this.body.speed<3){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255,146,42);
      stroke('black');
      strokeWeight(5);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
    else{
      push();
      World.remove(world, this.body);
  
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop(); 
    }
    
  }
  


}