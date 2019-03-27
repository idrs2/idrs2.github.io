console.log("main.js called")
var objectSet = [];

var butOne = new Button("I'm a Button!!", 100, 100, 200,60, colArray[2][4], colArray[2][6], colArray[0][2], colArray[1][6],canvas);
var butTwo = new Button("I'm a Button!!", 100, 200, 200,60, colArray[2][4], colArray[2][6], colArray[0][2], colArray[1][6],canvas);
objectSet.push(butOne,butTwo);

function animate(){
    ctx.clearRect(0,0,width,height);
    
    for(var i =0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    window.requestAnimationFrame(animate);
}
animate();



