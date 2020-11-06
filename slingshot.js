class Slingshot{
    constructor(bodyA,pointB){
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:1
        }
        this.sling=Matter.Constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
        }
        
        
    }
    fly(){
        this.sling.bodyA=null
    }
} 