class Bird {
    constructor(x,y){
        var poption = {
            restitution: 0.6,
            friction: 0.3,
            density: 1.0
        }
        this.bird = Bodies.rectangle(x,y,50,50,poption)
        World.add(world, this.bird);

    }

    display(){
        push();
        var pos = this.bird.position;
        var angle = this.bird.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, 50, 50)
        pop();
    }

}