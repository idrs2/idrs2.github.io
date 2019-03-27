console.log("drawing js called");

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

// complete drawing of a rectangle 
ctx.strokeStyle = 'rgb(255, 100. 90)';
ctx.fillStyle = 'rgb(50, 255,90)' ;
ctx.lineWidth = 5;
ctx.beginPath();
ctx.rect(100,100,300,50); 
ctx.stroke();
ctx.fill(); 

//draw square 
ctx.fillStyle= 'rgb(0,153,204)';
ctx.strokeStyle= 'rgb(0,0,0)';
ctx.lineWidth = 10;
ctx.beginPath();
ctx.rect(10,10,100,100);
ctx.stroke();
ctx.fill();

//draw cicle
ctx.fillStyle= 'rgb(255,204,51)';
ctx.strokeStyle= 'rgb(51,51,255)';
ctx.lineWidth = 10;
ctx.beginPath();
ctx.arc(200,60,50,0,2*Math.PI);
ctx.stroke();
ctx.fill();

//add text
ctx.fillStyle= 'rgb(0,0,255)';
var myFont = 'bold 30px monospace';
ctx.font= myFont;
ctx.fillText("Hello World", 300,50);

//draw line 
ctx.strokeStyle= "rgb(255,0,0)";
ctx.lineWidth=0.5;
ctx.beginPath();
ctx.moveTo(0,200);
ctx.lineTo(750,200);
ctx.stroke();

//draw polyline with closure 
ctx,strokeStyle="rgb(255,102,102)";
ctx.fillStyle= "rgb(255,255,153)";
ctx.lineWidth=10;
ctx.beginPath();
ctx.moveTo(0, 250);
ctx.lineTo(500,250);
ctx.lineTo(800,300);
ctx.lineTo(400,300);
ctx.closePath();
ctx.stroke();
ctx.fill();

// draw shape with a gradient
var my_gradient=ctx.createLinearGradient(10,350,10,550);
my_gradient.addColorStop(0,"rgb(255,102,102)");
my_gradient.addColorStop(0.5,"rgb(255,255,153)");
my_gradient.addColorStop(1,"rgb(0,153,204)");
ctx.fillStyle=my_gradient;
ctx.beginPath()
ctx.rect(10,350, 200,200);
ctx.fill();
ctx.stroke();

// quadratic curves (bezier)
ctx.strokeStyle="rgb(255,0,0)";
ctx.beginPath();
ctx.moveTo(300,400);
ctx.lineWidth=10;
ctx.quadraticCurveTo(500, 550, 700, 400);
ctx.stroke();
 


