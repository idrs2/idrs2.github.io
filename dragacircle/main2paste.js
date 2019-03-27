var objectSet = [];


var pointOne = new point(200, 300, 10, colArray[0][8],colArray[0][8],colArray[0][8], canvas);
var pointTwo = new point(320,200,150,270,colArray[0][7], 10, -3, 1);
var pointThree = new point(300,200,190,270,colArray[0][3], 10, 5, 2);
objectSet.push(pointOne, pointTwo, pointThree);


function animate(){
    ctx.clearRect(0,0,width,height);
    
    for(var i =0; i<objectSet.length; i++){
        objectSet[i].update();
    }







    window.requestAnimationFrame(animate);

}

animate();
