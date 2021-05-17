class Log{
    constructor(x, y, height, angle){
        var poption = {
            restitution: 0.6,
            friction: 1.5,
            density: 1.0
        }
        this.log = Bodies.rectangle(x,y, 20, height, poption)
        this.height = height;
        World.add(world, this.log);

        Matter.Body.setAngle(this.log, angle)

    }

    display(){
        push();
        var pos = this.log.position;
        var angle = this.log.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0, 0, 20, this.height)
        pop();
    }

}