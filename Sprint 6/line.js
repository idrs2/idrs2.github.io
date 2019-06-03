class Line{
    constructor(xS, yS, xM, yM, lCol){
        //Variables required for line
        this.xS = xS;
        this.yS = yS;
        this.xM = xM;
        this.yM = yM;
        this.fill = lCol;
    }
    update(){
        //Calling for line to be drawn
        this.draw()
    }
    draw(){
        //line function
        ctx.strokeStyle = this.fill;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.xS, this.yS);
        ctx.lineTo(this.xM, this.yM);
        ctx.stroke();
    }
}