class Brush{
    constructor(xM, yM, r, c1){
        this.xC = xM; // centre x
        this.yC = yM; // centre y
        this.r = r;
        this.fill = c1;
    }

    update(){
        //sends it to the draw function  
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

}