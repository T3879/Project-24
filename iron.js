class Iron{
   constructor(x,y,width,height){
       var options = {
    restitution:0.8,
    friction:3,
    density:30
       }
       this.x=1000;
       this.y=300;
       this.width=50;
       this.height=30;
       this.body = Bodies.rectangle(x,y,width,height,options);
       World.add(world,this.body);
   }
   display(){
       var ironpos=this.body.position;
       rectMode(CENTER);
       fill("brown");
       rect(ironpos.x,ironpos.y,this.width,this.height);
   }
}