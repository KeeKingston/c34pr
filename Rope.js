class Rope{
    constructor(bodyA,pointB){
    var options ={
    isStatic:false,
   bodyA:bodyA,
   pointB:pointB,
   stifness:1,
   angularstifness:1,
   length:450
    }
    this.pointB=pointB;
    this.rope=Constraint.create(options);
    World.add(world,this.rope);
    }
    fly(){
     this.rope.bodyA=null;
    }
    display(){
if(this.rope.bodyA){
var pointA=this.rope.bodyA.position;
var pointB=this.pointB
}

      push();
     stroke("white");
     strokeWeight(3.5);
     line(pointB.x,pointB.y,pointA.x,pointA.y);

     pop();
    }
    attach(body){
        this.rope.bodyA=body;
    }
    }