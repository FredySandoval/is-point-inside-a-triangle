//this was done using p5.js library
//shockerovip@gmail.com
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);strokeWeight(1);
  translate(width/2, height/2);
  let x1 = 0;
  let y1 = 0; 
  let x2 = 50;
  let y2 = -150; 
  let x3 = 100;
  let y3 = 0;   
  let px = mouseX-width/2;
  let py = mouseY-height/2;


  if(isInTriangle(px,py,x1,y1,x2,y2,x3,y3)){
  	fill(255);
  }else{noFill();}
  
  triangle( x1,y1,x2,y2,x3,y3);
}
//px,py is the point you want to check
//x1,y1,x2,y2,x3,y3 are the coordinate of the triangle
function isInTriangle(px,py,x1,y1,x2,y2,x3,y3){//returns true or false 
	let A =  (area(x1,y1,x2,y2,x3,y3));
  let A1 = (area(px,py,x1,y1,x2,y2));
  let A2 = (area(px,py,x2,y2,x3,y3));
  let A3 = (area(px,py,x1,y1,x3,y3));
	function area(xx1,yy1,xx2,yy2,xx3,yy3){
		return abs(( xx1 *(yy2 - yy3) + xx2 * (yy3 - yy1) + xx3 * (yy1- yy2))/2)
		}
   if(A1+A2+A3 <= A+0.1){//adds some buffer if triangle is moving
  	return true;
  }else{
    return false; 
  }
}
