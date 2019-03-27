console.log("test object js is called");

class controlobject {
    constructor(canvas){
        //objectSet = []
        this.objectSet = []
        //an empty list is made to keep rectangle on screen
        console.log("test object constructor");
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;

        this.w = 0;
        this.h = 0;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
        }

        mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
        }

        mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //console.log("mouse move event") 
        }

        //colarray here changes colour of thee rectangle 
        mUp(e){
        this.mouseDown = false;
        var ROne = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, colArray[1][3]);
        this.objectSet.push(ROne);
        console.log(this.objectSet)
        
        //console.log("mouse up event")
        //create the rectangle
        }

        update(){
            for (var i=0; i<this.objectSet.length; i++){
                this.objectSet[i].update();
            }
            
                
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
            if(this.mouseDown == true){
                console.log("mouse is down");
                this.draw();
                }
        }

        draw(){
            this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);
        }

        drawRect(x,y,w,h){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 1;
            ctx.strokeStyle = colArray[2][4];
            ctx.stroke();
        }
        

}

