console.log("test object js is called");

class controlobject {
    constructor(canvas, x,y,w,h){
        //objectSet = []
        this.objectSet = []
        //an empty list is made to keep rectangle on screen
        console.log("test object constructor");
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        //variables defines the measurements for the boundary rectangle and its position coordinates
        this.x= x;
        this.y = y;
        this.w = w;
        this.h = h;
        
        //variables define the width and height for the rectangle that is drawn on the screen(dragging rectangle)
        this.dw = 0;
        this.dh = 0;
        
        //for boundary of rectangle
        this.rectBound = false 

        //listeners called
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
        }

        mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        if(this.rectBound == true){
        this.mouseDown = true;}

        }

        mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //for the boundary 
        this.rectBound = this.boundsCheck (this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
        //calling rectBound
        //console.log(this.rectBound);
        //console.log("mouse move event") 
        }

        //colarray here will change colour of the dragging rectangle 
        mUp(e){

            if(Button.selectedShape == "undo"){
                this.objectSet.pop();
                Button.selectedShape ="";
            }
            else if(Button.selectedShape == "reset"){
                this.objectSet = [];
                Button.selectedShape = "";
            }
        
        //this function helps to define the dragging ellipse
 
        //establishing the conditions for the dragging ellipse
        if(this.mouseDown == true && this.rectBound == true){
            console.log(Button.selectedShape);
            //linking the shape buttons with drawing the shapes 
            if(Button.selectedShape == "rectangle"){
                var ROne = new Rectangle(this.xMouseStart, this.yMouseStart, this.dw, this.dh, Swatch.selectedColour);
                this.objectSet.push(ROne);
            }
            else if(Button.selectedShape == "ellipse"){
                var EOne = new Ellipse(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Swatch.selectedColour);
                this.objectSet.push(EOne);
            }
            else if(Button.selectedShape == "circle"){
                console.log("in circle");
                var COne = new Circle(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, Swatch.selectedColour);
                this.objectSet.push(COne);
            }
            else if(Button.selectedShape == "fivedot"){
                var FDFour = new FiveDot(this.xMouse, this.yMouse, 80,colArray[1][7], colArray[1][6], colArray[1][5]);
                this.objectSet.push(FDFour);
            }
            else if(Button.selectedShape == "line"){
                var LOne = new Line(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, Swatch.selectedColour);
                this.objectSet.push(LOne);
            }

            
            //console.log(this.objectSet);
           
           
            
            

            

    }

       
        this.mouseDown = false;

        
        
        
        //console.log("mouse up event")
        //create the rectangle
        }

        update(){
        //function for background/boundary rectangle 
        //the variables will be called again in the main which will define the position of the background/boundary reectangle   
        this.drawBoundaryRect(this.x, this.y,this.w,this.h,colArray[0][0]);
        this.drawRectangle(19,578,200,80,colArray[2][3]);



            
           for (var i=0; i<this.objectSet.length; i++){
                this.objectSet[i].update();
            }
          
         //this is for the dragging rectangle    
        this.dw = this.xMouse - this.xMouseStart;
        this.dh = this.yMouse - this.yMouseStart;
        //if mouse is down then will draw the rectangle(connects to the draw function)
            if(this.mouseDown == true){                         
                //console.log("mouse is down");
                this.draw();
                }
                

            
        }
        

        draw(){
           
            //for the dragging guided rectangle
            this.drawRect(this.xMouseStart, this.yMouseStart, this.dw, this.dh);
            

            
       
    
           

        }

        

        drawCircle(x,y,r){
            ctx.beginPath();
            ctx.arc(x,y,r,0,2*Math.PI);
            ctx.lineWidth = 1;
            ctx.strokeStyle = Swatch.selectedColour;
            ctx.stroke();
        }
    
        //this function draw the rectangle that is DRAWN 
        drawRect(x,y,w,h){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 2;
            ctx.strokeStyle = Swatch.selectedColour;
            ctx.stroke();
        }
        //rectangle for colour buttons black and white
        drawRectangle(x,y,w,h,col1){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 2;
            ctx.fillStyle = col1;
            ctx.fill();
        }
        //this function draws the BACKGROUND rectangle 
        drawBoundaryRect(x,y,w,h,col){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 12;
            ctx.fillStyle = col; 
            ctx.strokeStyle = colArray[0][4]
            ctx.stroke();
            ctx.fill();
        }
        //boundary of the canvas
        boundsCheck(xMouse, yMouse, x, y, w, h){ 
            if(xMouse > x && xMouse < x + w && yMouse > y && yMouse < y+ h){
                return true;
            }else{
                return false;
            }
            }

            

       
        



}