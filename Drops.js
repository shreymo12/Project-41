class Drop{
    constructor(x,y,radius){
        var options = 
        {
            friction: 0.0001,
            restitution: 0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.x=x;
    this.y=y;
    World.add(world,this.body);
    }
    updateY(){
        if(this.body.position.y>height){
            this.body.setPostition(this.body,{x: random(0, 400), y: random(0, 400)});
        }
    }
    display(){
        var pos = this.body.position;
        push ();
        fill ("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this,radius+8);
        pop ();


    }
    
}