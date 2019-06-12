

console.log("shape buttons is called");

class Button{
    constructor(text, x, y,w, h, stroke, fill, textC,over,canvas){
        this.x = x;
        this.y =y;
        this.w = w;
        this.h = h;
        this.stroke =stroke;
        this.fill = fill;
        this.textC= textC;
        this.text = text;
        //over = the color when mousee hovers over button or when mouse clicks on it
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
        //boundary checks 
        this.bound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    mClick(e){
        if(this.bound == true){
            //creating varables 
            Button.selected = this;
            Button.selectedShape =this.text;
           
        }
    }

    

    mUp(e){
        
        }


    update(){
        this.draw();
        this.writeText();

    }

    draw(){
        if(Button.selected == this){
            ctx.fillStyle = this.over;
            //if button is selected colour will be white
           
        }
        else if(this.bound){
            ctx.fillStyle = this.over;
            //if button hovers over button, color will be white 
           

        }
        else{
            //otherwse fill will stay the same 
            ctx.fillStyle = this.fill;
        }
        
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.strokeStyle = this.stroke;
        //linewidth of the shape button
        ctx.lineWidth = 4;
        ctx.fill();
        ctx.stroke();
        
    }
    writeText(){
        ctx.fillStyle = this.textC;
        ctx.font = "30px sans-serif";
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
    }
    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < x + w && yM > y && yM < y+ h){
            return true;
        }else{
            return false;
        }

    
        
}



}
Button.selected ="";//universal
Button.selectedShape ="";//universal
