

console.log("function is called");

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

var colArray=[
    "rgb(255,255,255)", "rgb(153,153,153)", "rgb(0,0,0)", 
    "rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)", "rgb(0,153,204)"
    ]
    // access a colour by using the array index
    console.log("hello")
    
    
//function drawCircle
function drawCircle(x,y,r, fillC, strokeC,lineW,fill,stroke){
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    if (fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if (stroke == true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}
// call cirlce function
drawCircle(200,500, 50, colArray[0], colArray[4], 6, false, true);
drawCircle(400,500, 50, colArray[0], colArray[4], 6, false, true);
drawCircle(600,500, 50, colArray[0], colArray[4], 6, false, true);


// function drawRectangle  
function drawRectangle(x,y,w,h, fillC, strokeC, lineW, fill, stroke ){
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();

    }
    if(stroke == true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }

}
//call rectangle function 
drawRectangle(200,300, 30,40, colArray[1], colArray[5], 6, true, false);
drawRectangle(400,300, 40,40, colArray[2], colArray[7], 6, true, true);
drawRectangle(600,300, 50,40, colArray[1], colArray[3], 6, false, true);


// function drawLine 
function drawLine(x_1, y_1, x_2, y_2, lineW, strokeCol){
    ctx.strokeStyle = strokeCol;
    ctx.lineWidth = lineW;
    ctx.beginPath();
    ctx.moveTo(x_1, y_1);
    ctx.lineTo(x_2, y_2);
    ctx.stroke();
    
}
// call line function 
drawLine(50, 100, 150, 200, 2, colArray[4] );
drawLine(200, 100, 200, 200, 7, colArray[6] );
// creating rectangle cross
drawRectangle(300, 50, 200,200, colArray[7], colArray[8], 3, true, true);
drawLine(300, 250, 500, 50, 0.5, colArray[2] );
drawLine(300, 50, 500, 250, 0.5, colArray[8] );

function writeText(m, x,y, col){
    ctx.fillStyle=col;
    var myFont= "bold 30px sans-serif";
    ctx.font=myFont;
    ctx.fillText(m, x,y);
}

writeText("This is a cool function ",500, 100, colArray[0]);
writeText("WOW thats amazing",500, 130, colArray[0]);


