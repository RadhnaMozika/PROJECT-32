class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    //detaching body when mouse is released
    fly(){
        this.sling.bodyA = null;
    }

    attach(body1){
        this.sling.bodyA = body1;
        
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(3.5);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+5);
        }
    }
    
}
