class Mango{
    constructor(x,y,r) {
        var options = {
            isStatic: true,
            restitution:0.4,
           friction:1.0,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.r = r;
  
        this.image = loadImage("images/mango.png");
        
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image( this.image,this.body.position.x, this.body.position.y,this.r,this.r);
      }
    };