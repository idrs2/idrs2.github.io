console.log("main is called");

var BB = new Ball(300,300,20, colArray[0][7]);
BB.update();
var count = 0;
function animate(){
    ctx.clearRect(0,0, width, height);
    count +=1;
    count = count%100;
    BB.update();


    




window.requestAnimationFrame(animate);

}
animate();

