console.log("buttons is called");

class Swatch{
    constructor(x, y,w, h, stroke, swatch,over,canvas){
        this.x = x;
        this.y =y;
        this.w = w;
        this.h = h;
        this.stroke =stroke;
        this.swatch = swatch;
        this.over =  over;
        
        

        this.xMouse = 0;
        this.yMouse = 0; 
        this.bound= false;
        this.selected = false;

        this.rectBound = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        
        this.bound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    mClick(e){
        if(this.bound == true){
            //links the colur buttons to the shapes 
            Swatch.selected = this;
            Swatch.selectedColour =this.swatch;
           ;
           
        }
    }

    

    mUp(e){
        //console.log("mouse up event")
        //create the rectangle
        }


    update(){
        this.draw();
       
    }

    draw(){
        
        var toStroke = false;
        //if user is in bounds and the button is selected then the stroke will apear 
        if(this.bounds || Swatch.selected == this){
            ctx.fillStyle= this.over;
            toStroke = true;
        //if user is in bound of the button then the strke will be selected with the fillstyle still there 
        }else if(this.bound){

            ctx.fillStyle = this.over;
            toStroke = true;
        }
        //if user is not in boundary then the fill style will remian there without anything being selected 
        else{
            ctx.fillStyle = this.swatch;
        }
        //this.drawRect= allows the rectangle
        this.drawRect(this.x, this.y, this.w, this.h, this.fill, toStroke);
        //ctx.fillStyle = "rgba(255,250,240,220)";
        ctx.beginPath()
        ctx.fill();
        
        
    
}
    
drawRect(x,y,w,h,col, toStroke){
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = col;
    ctx.fill();
    ctx.lineWidth = 8;
    if(toStroke){
        ctx.strokeStyle = this.stroke;
        ctx.stroke()
    }
    ctx.restore();
    }
    
    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < x + w && yM > y && yM < y+ h){
            return true;
        }else{
            return false;
        }

    
        
}



}
Swatch.selected ="";
Swatch.selectedColour ="";
           
