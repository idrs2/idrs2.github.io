class Line{
    constructor(xS, yS, xM, yM, lw,c1 ){
        //Variables required for line
        this.xS = xS;
        this.yS = yS;
        this.xM = xM;
        this.yM = yM;
        //variable for the different line widths 
        this.lw = lw;
        this.fill = c1;
    }
    update(){
        //Calling for line to be drawn
        this.draw()
    }
    draw(){
        //line function
        
        ctx.strokeStyle = this.fill;
        ctx.lineWidth = this.lw;
        //makes the shape of the  line roundish 
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.xS, this.yS);
        ctx.lineTo(this.xM, this.yM);
        
        ctx.stroke();
    }
}