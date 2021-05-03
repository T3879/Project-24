class Marble{
	constructor(x,y,r){
		var options = {
		restitution:0.6,
        friction:3,
		density:7
		  };
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=10;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var marblepos=this.body.position;		
			push()
			translate(marblepos.x, marblepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);
			pop()
	}

}