class Box{
constructor(x,y,width,height){
	 var  option_1={isStatic:true
	}
	this.body=Bodies.rectangle(x,y,width,height,option_1)
	this.width=width;
	this.height=height;


World.add(world,this.body)
}
display(){
	push ();

rectMode(CENTER);
fill ("red")
rect(this.body.position.x,this.body.position.y,this.width,this.height);

    pop ();



}

};