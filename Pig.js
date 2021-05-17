class Pig {
    constructor(x,y){
        var poption = {
            restitution: 0.6,
            friction: 0.3,
            density: 1.0
        }
        this.pig = Bodies.rectangle(x,y,50,50,poption)
        World.add(world, this.pig);

    }

    display(){
        push();
        var pos = this.pig.position;
        var angle = this.pig.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink");
        rect(0, 0, 50, 50)
        pop();
    }

}