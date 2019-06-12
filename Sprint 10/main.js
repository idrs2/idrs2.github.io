console.log("main is called");
var objectSet = [];


//this controls the boundary rectangle and its position 
var myT = new controlobject(canvas,241,30,500,640);
objectSet.push(myT);
//SHAPE/UNDO AND CLEAR BUTTONS
//(text, x, y,w, h, stroke, fill, textC,over,canvas)
//undo and clear buttons 
var Shape1 = new Button("undo",20, 30, 200,30, colArray[1][9], colArray[2][9], colArray[0][9],colArray[0][10],canvas);
var Shape2 = new Button("clear",20, 80, 200,30, colArray[1][9], colArray[2][9], colArray[0][9],colArray[0][10],canvas);
//shapes 
var Shape3 = new Button("brush",36, 130, 160,35, colArray[2][9], colArray[2][9], colArray[0][9],colArray[0][10],canvas);
var Shape4 = new Button("line",36, 230, 160,35, colArray[2][9], colArray[2][9], colArray[0][9],colArray[0][10],canvas);
var Shape5 = new Button("square",36,330,160,35,colArray[2][9], colArray[2][9], colArray[0][9],colArray[0][10],canvas);
var Shape6 = new Button("rotating rect",36,380,160,35,colArray[2][9], colArray[2][9], colArray[0][9],colArray[0][10],canvas);
var Shape7 = new Button("circle",36, 430, 160,35, colArray[2][9], colArray[2][9], colArray[0][9],colArray[0][10],canvas);
var Shape8 = new Button("rectangle",36, 480, 160,35, colArray[2][9], colArray[2][9], colArray[0][9],colArray[0][10], canvas);
var Shape9 = new Button("ellipse",36, 530, 160,35, colArray[2][9], colArray[2][9], colArray[0][9],colArray[0][10],canvas);
objectSet.push(Shape1,Shape2,Shape3,Shape4,Shape5,Shape6,Shape7,Shape8,Shape9);
//brush width 
//(text, x, y, w, h, width, stroke, fill, textC, over, canvas)
var bw1 = new width_Button("XS", 10, 180, 30, 30,0, 3, colArray[0][9], colArray[0][9], colArray[0][3], colArray[0][10], canvas);
var bw2 = new width_Button("S", 55, 180, 30, 30, 0,7, colArray[0][9], colArray[0][9], colArray[0][3], colArray[0][10], canvas);
var bw3 = new width_Button("M", 100, 180, 30, 30,0, 12, colArray[0][9], colArray[0][9], colArray[0][3], colArray[0][10], canvas);
var bw4 = new width_Button("L", 145, 180, 30, 30,0, 20, colArray[0][9], colArray[0][9], colArray[0][3], colArray[0][10], canvas);
var bw5 = new width_Button("XL", 190, 180, 30, 30,0, 30, colArray[0][9], colArray[0][9], colArray[0][3], colArray[0][10], canvas);
objectSet.push(bw1, bw2, bw3, bw4, bw5);
//lineWidth
//var lw1 = new width_Button("XS", 10, 280, 30, 30, 2, 0, colArray[0][9], colArray[0][9], colArray[0][3], colArray[0][10], canvas);
var lw2 = new width_Button("S", 55, 280, 30, 30, 5, 0, colArray[0][9], colArray[0][9], colArray[0][3], colArray[0][10], canvas);
var lw3 = new width_Button("M", 100, 280, 30, 30, 8, 0, colArray[0][9], colArray[0][9], colArray[0][3], colArray[0][10], canvas);
var lw4 = new width_Button("L", 145, 280, 30, 30, 15, 0, colArray[0][9], colArray[0][9], colArray[0][3], colArray[0][10], canvas);
//var lw5 = new width_Button("XL", 190, 280, 30, 30, 25, 0, colArray[0][9], colArray[0][9], colArray[0][3], colArray[0][10], canvas);
objectSet.push( lw2, lw3, lw4);


//COLOURS BUTTONS
for(var i = 0; i<3; i ++){
    for(var j = 0; j<9; j++){
    var colours = new Swatch(760 + 80*i,30 + 70*j,60,60, colArray[2][9], colArray[i][j],colArray[i][j], canvas);
    objectSet.push(colours);
}
    

}

//x, y,w, h, stroke, swatch,over,canvas
//colour buttons for black and white(not inclided in the loop)
var C1= new Swatch(50,590,60,60, colArray[2][9], colArray[0][9],colArray[0][9], canvas);
var C2= new Swatch(120,590,60,60, colArray[2][9], colArray[0][10],colArray[0][10], canvas);
objectSet.push(C1,C2); 




function animate(){
    ctx.clearRect(0,0,width,height);
   
   
    
    for(var i =0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    window.requestAnimationFrame(animate);
}
animate();
    
    
   
    




animate();





