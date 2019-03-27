console.log("loops is called");



/*red dots*/   
var i = 0;   
drawCircle(100 +70*i,200, 30, colArray[6], colArray[3], 6, true, true);
i=1;
drawCircle(100 +70*i,200, 30, colArray[6], colArray[3], 6, true, true);
i=2;
drawCircle(100 +70*i,200, 30, colArray[6], colArray[3], 6, true, true);
i=3;
drawCircle(100 +70*i,200, 30, colArray[6], colArray[3], 6, true, true);
 
/*blue dots*/
for(var i=0 ; i<10; i++){
    console.log(i);
    drawCircle(420 +30* i,200, 10, colArray[5], colArray[3], 4, true, true);
 
}
/*yellow dots */
for(var j=0 ; j<10; j++){
    console.log(j);
    drawCircle(700, 60+ j*30, 10, colArray[4], colArray[0][6], 4, true, true);
 
}
/*black dots*/
for(var z=0 ; z<10; z++){
    console.log(z);
    drawCircle(400, 60+ z*30, 10, colArray[2], colArray[0][6], 4, true, true);
 
}



for(var i = 0; i<5;  i++){
    for(var j = 0; j<5; j++){
        drawCircle(10 + 30*i,10+ j*30, 10, colArray[6], colArray[0][6], 4, true, true);

    }
}







