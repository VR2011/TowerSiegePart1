class Block{
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction': 1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, angle, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    rotate(angle);
    rectMode(CENTER);
    fill("orange");
    rect(this.body.position.x, this.body.position.y);
    pop();
  }
  
  };
  