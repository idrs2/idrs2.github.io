class width_Button{
    constructor(text, x, y, w, h, width, radius, stroke, fill, textC, over, canvas){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        //the width is for the different widths of the line so different line sizes 
        this.width = width;
        //the radius is used for the different brush sizes- determines the size 
        this.radius = radius;
        this.stroke = stroke;
        this.fill = fill;
        //textC = colour of text on the button 
        this.textC = textC;
        this.text = text;
        //colour when the mouse hovers over the button
        this.over = over;

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        this.rectBound = false;

        this.bound = false;
        this.selected = false;
        //event listeners 
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }
    
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY; 
        //boundary check 
        this.bound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }
    mClick(e){
        if(this.bound == true){
            
            width_Button.selected = this;
            //variable for the different line widths of the line 
            width_Button.selectedLineWidth = this.width;
            //variable for the different brush sizes 
            width_Button.selectedRadius = this.radius;
        }
    }

    update(){
        //calls the draw function below 
        this.draw();     
        //calls the text function    
        this.writeText();
        }

    draw(){
        //if selected then fill style is white 
        if(width_Button.selected == this){
            ctx.fillStyle = this.over;
            
            
            
            
        }
        else if(this.bound){
            //if only in bouunds so hover over, fillstyle white too 
            ctx.fillStyle = this.over;
       
            

        }
        else{
            //otherwiise fill style is grey as usual
            ctx.fillStyle = this.fill;
        }
        
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = this.stroke;
        //determines the size of the outline of the button 
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();

    }

    writeText(){
        ctx.fillStyle = this.textC;
        ctx.font = "17px sans-serif";
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
    }
    //bounds check for the boundary 
    boundsCheck(xM, yM, x, y, w, h){ 
    if(xM > x && xM < x + w && yM > y && yM < y+ h){
        return true;
    }else{
        return false;
    }
    }

}
width_Button.selected = ""; //universal
width_Button.selectedLineWidth = ""; //universal
width_Button.selectedRadius ="";//universal