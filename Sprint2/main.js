console.log("main is called");
var objectSet = [];


//this controls the boundary rectangle and its position 
var myT = new controlobject(canvas,250,30,500,550);
objectSet.push(myT);
//(text, x, y,w, h, stroke, fill, textC,over,canvas)
var butOne = new Button("rectangle",20, 50, 200,50, colArray[0][1], colArray[0][1], colArray[0][2],colArray[0][0], canvas);
var butTwo = new Button("ellipse",20, 120, 200,50, colArray[0][1], colArray[0][1], colArray[0][2],colArray[0][0],canvas);


objectSet.push(butOne,butTwo,);

function animate(){
    ctx.clearRect(0,0,width,height);
   
   
    
    for(var i =0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    window.requestAnimationFrame(animate);
}
animate();
    
    
   
    




animate();





