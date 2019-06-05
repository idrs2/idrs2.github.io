console.log("main is called");
var objectSet = [];


//this controls the boundary rectangle and its position 
var myT = new controlobject(canvas,241,30,500,640);
objectSet.push(myT);
//SHAPE BUTTONS
//(text, x, y,w, h, stroke, fill, textC,over,canvas)
var Shape1 = new Button("rectangle",40, 30, 150,40, colArray[2][2], colArray[2][2], colArray[0][3],colArray[0][0], canvas);
var Shape2 = new Button("ellipse",40, 85, 150,40, colArray[2][2], colArray[2][2], colArray[0][3],colArray[0][0],canvas);
var Shape3 = new Button("circle",40, 140, 150,40, colArray[2][2], colArray[2][2], colArray[0][3],colArray[0][0],canvas);

//create undo and reset button
var Shape4 = new Button("undo",20, 480, 200,30, colArray[2][2], colArray[2][2], colArray[0][3],colArray[0][0],canvas);
var Shape5 = new Button("clear",20, 530, 200,30, colArray[2][2], colArray[2][2], colArray[0][3],colArray[0][0],canvas);

var Shape6 = new Button("line",40, 350, 150,40, colArray[2][2], colArray[2][2], colArray[0][3],colArray[0][0],canvas);
var Shape7 = new Button("brush",40, 250, 150,40, colArray[2][2], colArray[2][2], colArray[0][3],colArray[0][0],canvas);




objectSet.push(Shape1,Shape2,Shape3,Shape4,Shape5,Shape6,Shape7);
//brush width 
//(text, x, y, w, h, width, stroke, fill, textC, over, canvas)
var bw1 = new width_Button("XS", 10, 300, 30, 30,0, 3, colArray[0][3], colArray[0][3], colArray[0][5], colArray[0][0], canvas);
var bw2 = new width_Button("S", 55, 300, 30, 30, 0,7, colArray[0][3], colArray[0][3], colArray[0][5], colArray[0][0], canvas);
var bw3 = new width_Button("M", 100, 300, 30, 30,0, 12, colArray[0][3], colArray[0][3], colArray[0][5], colArray[0][0], canvas);
var bw4 = new width_Button("L", 145, 300, 30, 30,0, 17, colArray[0][3], colArray[0][3], colArray[0][5], colArray[0][0], canvas);
var bw5 = new width_Button("XL", 190, 300, 30, 30,0, 22, colArray[0][3], colArray[0][3], colArray[0][5], colArray[0][0], canvas);
objectSet.push(bw1, bw2, bw3, bw4, bw5);
//lineWidth
var lw1 = new width_Button("XS", 10, 400, 30, 30, 2, 0, colArray[0][3], colArray[0][3], colArray[0][5], colArray[0][0], canvas);
var lw2 = new width_Button("S", 55, 400, 30, 30, 5, 0, colArray[0][3], colArray[0][3], colArray[0][5], colArray[0][0], canvas);
var lw3 = new width_Button("M", 100, 400, 30, 30, 10, 0, colArray[0][3], colArray[0][3], colArray[0][5], colArray[0][0], canvas);
var lw4 = new width_Button("L", 145, 400, 30, 30, 15, 0, colArray[0][3], colArray[0][3], colArray[0][5], colArray[0][0], canvas);
var lw5 = new width_Button("XL", 190, 400, 30, 30, 20, 0, colArray[0][3], colArray[0][3], colArray[0][5], colArray[0][0], canvas);
objectSet.push(lw1, lw2, lw3, lw4, lw5);


//COLOURS BUTTONS
//( x, y,w, h, stroke, swatch(fill),over,canvas)
///1st set - green
var C1 = new Swatch(760,30, 60,60, colArray[2][2], colArray[0][2],colArray[0][2], canvas);
var C2= new Swatch(840,30,60,60, colArray[2][2], colArray[1][1],colArray[1][1], canvas);
var C3= new Swatch(920,30,60,60, colArray[2][2], colArray[2][1],colArray[2][1], canvas);
//2nd set - blue

var C4= new Swatch(760,100,60,60, colArray[2][2], colArray[0][1],colArray[0][1], canvas);
var C5= new Swatch(840,100,60,60, colArray[2][2], colArray[1][0],colArray[1][0], canvas);
var C6= new Swatch(920,100,60,60, colArray[2][2], colArray[2][0],colArray[2][0], canvas);
//3rd set - purple
var C7= new Swatch(760,170,60,60, colArray[2][2], colArray[0][4],colArray[0][4], canvas);
var C8= new Swatch(840,170,60,60, colArray[2][2], colArray[1][3],colArray[1][3], canvas);
var C9= new Swatch(920,170,60,60, colArray[2][2], colArray[2][3],colArray[2][3], canvas);
//4th set - pink 
var C10= new Swatch(760,240,60,60, colArray[2][2], colArray[0][5],colArray[0][5], canvas);
var C11= new Swatch(840,240,60,60, colArray[2][2], colArray[1][4],colArray[1][4], canvas);
var C12= new Swatch(920,240,60,60, colArray[2][2], colArray[2][4],colArray[2][4], canvas);
//5th set - blue/greenish 
var C13= new Swatch(760,310,60,60, colArray[2][2], colArray[0][6],colArray[0][6], canvas);
var C14= new Swatch(840,310,60,60, colArray[2][2], colArray[1][5],colArray[1][5], canvas);
var C15= new Swatch(920,310,60,60, colArray[2][2], colArray[2][5],colArray[2][5], canvas);
//6th set - orange 
var C16= new Swatch(760,380,60,60, colArray[2][2], colArray[0][7],colArray[0][7], canvas);
var C17= new Swatch(840,380,60,60, colArray[2][2], colArray[1][6],colArray[1][6], canvas);
var C18= new Swatch(920,380,60,60, colArray[2][2], colArray[2][6],colArray[2][6], canvas);
//7th set - dark green
var C19= new Swatch(760,450,60,60, colArray[2][2], colArray[0][8],colArray[0][8], canvas);
var C20= new Swatch(840,450,60,60, colArray[2][2], colArray[1][7],colArray[1][7], canvas);
var C21= new Swatch(920,450,60,60, colArray[2][2], colArray[2][7],colArray[2][7], canvas);
//8th set - yellow
var C22= new Swatch(760,520,60,60, colArray[2][2], colArray[0][9],colArray[0][9], canvas);
var C23= new Swatch(840,520,60,60, colArray[2][2], colArray[1][8],colArray[1][8], canvas);
var C24= new Swatch(920,520,60,60, colArray[2][2], colArray[2][8],colArray[2][8], canvas);
//9th set - dark pink
var C25= new Swatch(760,590,60,60, colArray[2][2], colArray[0][10],colArray[0][10], canvas);
var C26= new Swatch(840,590,60,60, colArray[2][2], colArray[1][9],colArray[1][9], canvas);
var C27= new Swatch(920,590,60,60, colArray[2][2], colArray[2][9],colArray[2][9], canvas);
//10th set - black, white 
var C28= new Swatch(50,590,60,60, colArray[2][2], colArray[0][0],colArray[0][0], canvas);
var C29= new Swatch(120,590,60,60, colArray[2][2], colArray[0][3],colArray[0][3], canvas);
objectSet.push(C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C11,C12,C13,C14,C15,C16,C17,C18,
C19,C20,C21,C22,C23,C24,C25,C26,C27,C28,C29); 




function animate(){
    ctx.clearRect(0,0,width,height);
   
   
    
    for(var i =0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    window.requestAnimationFrame(animate);
}
animate();
    
    
   
    




animate();





