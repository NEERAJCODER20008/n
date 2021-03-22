class Paper {
  constructor(x, y,r) {
    var options = {
        'restitution':0.3,
        'friction':5,
        'density':1,
    }
this.x=x;
this.y=y;
this.r=r;
    this.body= Bodies.circle(this.x,this.y,this.r/2, options);
    this.image = loadImage("paper.png"),
  

    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
   // rotate(this.body.angle)
    imageMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill(255);
    image(this.image,0, 0, this.r, this.r);
    pop();
  }
};
  

  
