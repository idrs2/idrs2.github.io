console.log("main is called");



var objectSet = [];


var pointOne = new point(200, 300, 10, colArray[0][8],colArray[0][7],colArray[1][8], canvas);
var pointTwo = new point(300, 200, 90, colArray[1][8],colArray[2][7],colArray[0][8], canvas);
objectSet.push(pointOne, pointTwo);


function animate(){
    ctx.clearRect(0,0,width,height);
    
    for(var i =0; i<objectSet.length; i++){
        objectSet[i].update();
    }







    window.requestAnimationFrame(animate);

}

animate();