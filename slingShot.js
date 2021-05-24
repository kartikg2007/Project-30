class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

            //this.pol = loadImage("polygon.png")
            //this.sling2 = loadImage("sprites/sling2.png")
            //this.sling3 = loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //image(this.pol, 200, 200);
        //image(this.sling2, 170, 20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            //push();
            stroke("white")

            //if(pointA.x<220){
            
            //poly = Bodies.circle(50,200,20);
            //world.add(world, poly)
            strokeWeight(8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //line(pointA.x-20, pointA.y, pointB.x+20, pointB.y-5);

            //image(this.sling3, pointA.x-30, pointA.y-10, 15, 30)
            //}
            //else {
             //   strokeWeight(4);
            //line(pointA.x+20, pointA.y, pointB.x-20, pointB.y);
            ////line(pointA.x+20, pointA.y, pointB.x+20, pointB.y-5);

            //image(this.sling3, pointA.x+25, pointA.y-10, 15, 30)
            }
            //pop();

            //imageMode(CENTER)
            //image(this.pol, poly.position.x, poly.position.y, 40,40)
        }
    }
    
//}