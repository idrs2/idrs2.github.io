class Rotate{
    constructor(xM, yM, xS, yS, w, h, c1){
        this.xC = (xS + xM)/2;
        this.yC = (yS + yM)/2;
        this.w = w;
        this.h = h;
        this.fill = c1;
        this.degrees = 0;
    }


    update(){
        this.degrees += 1;
        // drawing rectangle
        this.draw();
    }

    draw(){
        ctx.save();
        ctx.translate(this.xC, this.yC);
        ctx.rotate(this.degrees*Math.PI/180);
        ctx.beginPath();
        ctx.rect(-this.w/2 ,  -this.h/2, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.restore();
    }
}