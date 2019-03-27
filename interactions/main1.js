console.log("main is called");

var myT = new controlobject(canvas);

function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();

    window.requestAnimationFrame(animate);

}
animate();

