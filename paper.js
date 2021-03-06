class paper {

constructor (x,y,r){

    var options = {
        isStatic : false,
        restitution:0.3,
        friction : 0.5,
        density : 1.2,
    }


this.image = loadImage("paper.png")
this.image.scale = 0.1

this.body = Bodies.circle(x,y,r/2,options)
this.r = r
World.add(world, this.body);
}

display (){

    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("yellow");
    image(this.image, 0, 0, this.width, this.height);
    pop();

}

}