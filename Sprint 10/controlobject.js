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
        //the radius
        this.r = 0;
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
        if(this.mouseDown == true && this.rectBound == true){
            //defying the variable of radius for the different brush sizes 
            this.r = width_Button.selectedRadius;
            if(Button.selectedShape == "brush"){
                console.log("brush");
                //brush will be drawn or used 
                var BOne = new Brush(this.xMouse, this.yMouse, this.r, Swatch.selectedColour);
                this.objectSet.push(BOne);
                
            }
    }
        
        }

    
        mUp(e){
            //undo button 
            if(Button.selectedShape == "undo"){
                this.objectSet.pop();
                console.log("undo")
                Button.selectedShape ="";
            }
            //clear button
            else if(Button.selectedShape == "clear"){
                this.objectSet = [];
                console.log("reset button");
                Button.selectedShape = "";
            }
        
        //this function helps to define the dragging ellipse
 
        //establishing the conditions for the dragging ellipse
        if(this.mouseDown == true && this.rectBound == true){
            //defying the variable for the different line widths/ sizes
            this.lw = width_Button.selectedLineWidth;
            //linking the shape buttons with drawing the shapes 
            if(Button.selectedShape == "rectangle"){
                var ROne = new Rectangle(this.xMouseStart, this.yMouseStart, this.dw, this.dh, Swatch.selectedColour);
                console.log("rectangle");
                this.objectSet.push(ROne);
            }
            else if(Button.selectedShape == "ellipse"){
                var EOne = new Ellipse(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Swatch.selectedColour);
                console.log("Ellipse");
                this.objectSet.push(EOne);
            }
            else if(Button.selectedShape == "circle"){
                console.log("in circle");
                var COne = new Circle(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, Swatch.selectedColour);
                console.log("circle");
                this.objectSet.push(COne);
            }
           
           else if(Button.selectedShape == "line"){
                var LOne = new Line(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart,this.lw, Swatch.selectedColour);
                console.log("line")
                this.objectSet.push(LOne);
            }

            else if(Button.selectedShape == "square"){
                console.log("Rotate");
                var SOne = new Square( this.xMouseStart, this.yMouseStart, this.dw, this.dh, Swatch.selectedColour);
                console.log("square")
                this.objectSet.push(SOne);
            }

            else if (Button.selectedShape == "rotating rect"){
                console.log("rotate");
                var RROne = new Rotate(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, this.dw, this.dh, Swatch.selectedColour);
                console.log("rotating rectangle");
                this.objectSet.push(RROne);
            }

            
           
           
           
            
            

            

    }

       
        this.mouseDown = false;

        
        
        
        
        }

        update(){
        ctx.save();
        ctx.beginPath();
        //function for background/boundary rectangle 
        //the variables will be called again in the main which will define the position of the background/boundary reectangle   
        this.drawBoundaryRect(this.x, this.y,this.w,this.h);
        //helps so that the shapes and brush doesnt go out of boundary
        ctx.clip();
        
        
        


            
           for (var i=0; i<this.objectSet.length; i++){
                this.objectSet[i].update();
            }
        ctx.restore();
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
            //for the guided rectangle that is drawn 
            if(Button.selectedShape == "line" || Button.selectedShape == "rectangle" || Button.selectedShape == "ellipse" || Button.selectedShape == "circle"
            || Button.selectedShape == "square"|| Button.selectedShape == "rotating rect"){
                this.drawRect(this.xMouseStart, this.yMouseStart, this.dw, this.dh);
            }
           
        
    }

        
        
    
    
        //this function draw the rectangle that is DRAWN 
        drawRect(x,y,w,h){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 2;
            ctx.strokeStyle = Swatch.selectedColour;
            ctx.stroke();
        }
        
        //this function draws the BACKGROUND rectangle 
        drawBoundaryRect(x,y,w,h,col){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 12;
            ctx.fillStyle = "rgb(255,255,255)"; 
            ctx.strokeStyle = colArray[0][3]
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