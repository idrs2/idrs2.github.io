console.log("function is called");

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;


let painting = false; 

function startPosition(e){
    painting = true;
    draw(e);
    }
function finishedPosition(){
    painting= false;;
    ctx.beginPath();

    }

function draw(e){
    if(!painting) return;
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY)
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);


    }
canvas.addEventListener('mousedown', startPosition );
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

