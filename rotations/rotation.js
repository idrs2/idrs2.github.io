console.log("rotations is called ");
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
drawRectangle(400,200,30,50, colArray[1], colArray[3], 7, true, true);

ctx.save();
ctx.translate(300,200);
ctx.rotate(45*Math.PI/180);
drawRectangle(0,0,150,50, colArray[2][9], colArray[2][5], 8, true, true);
ctx.restore();  

for(var i=0; i<360; i+=15){
    ctx.save();
ctx.translate(500,200);
ctx.rotate(i*Math.PI/180);
drawRectangle(0,0,50,250, colArray[0][4], colArray[1][5], 5, true, true);
ctx.restore();

}

ctx.save();
ctx.translate(100,50);
ctx.rotate(45*Math.PI/180);
drawRectangle(0,0,50,50, colArray[2][4], colArray[2][5], 8, true, true);
ctx.restore();  

for(var i=0; i<360; i+=15){
    ctx.save();
ctx.translate(100,90);
ctx.rotate(i*Math.PI/180);
drawRectangle(0,0,50,80, colArray[0][7], colArray[1][5], 5, true, true);
ctx.restore();

}

ctx.save();
ctx.translate(300,200);
ctx.rotate(30*Math.PI/180);
drawCircle(0,0,20,"",colArray[1][6], 2, false, true);
drawRectangle(0,0,100,200, colArray[0][4], colArray[1][5], 5, true, true);
ctx.restore();  


ctx.save();
ctx.translate(300,200);
for(var i=0; i<360; i+=15){
    ctx.rotate(15*Math.PI/180);
    drawRectangle(0,0,50,50, colArray[0][4], colArray[1][5], 2, true, true);

}
ctx.restore();









