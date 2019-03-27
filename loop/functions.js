console.log("loops is called");



    
    
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




// function drawLine 
function drawLine(x_1, y_1, x_2, y_2, lineW, strokeCol){
    ctx.strokeStyle = strokeCol;
    ctx.lineWidth = lineW;
    ctx.beginPath();
    ctx.moveTo(x_1, y_1);
    ctx.lineTo(x_2, y_2);
    ctx.stroke();
    
}


function writeText(m, x,y, col){
    ctx.fillStyle=col;
    var myFont= "bold 30px sans-serif";
    ctx.font=myFont;
    ctx.fillText(m, x,y);
}




