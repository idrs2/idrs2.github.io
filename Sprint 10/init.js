console.log("init js file has been called");
// ----------------- set up code includes resolution management
var myScale = 0;

function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;
  myScale=dpr;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  console.log(rect.width);
  console.log(rect.height);
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  return ctx;
}
// basic drawing on the canvas with no functions


 // Now this line will be the same size on the page
  // but will look sharper on high-DPI devices!
var ctx = setupCanvas(document.querySelector('#myCanvas'));
canvas = document.querySelector('#myCanvas');
const width = canvas.width/myScale;
const height = canvas.height/myScale;
console.log(width);
console.log(height);


//-----------------------------
var colArray=[
    [
      //1st col array 
    "rgba(23,96,135,1)", "rgba(145,177,122,1)", "rgba(148,131,146,1)","rgba(180,101,111,1)",
      "rgba(151,180,178,1)","rgba(209,123,92,1)", "rgba(66,106,90,1)", "rgba(255,209,102,1)", 
      "rgba(239,71,111,1)", "rgba(0,0,0,1)","rgba(255,255,255,1)","rgb(128,128,128,1)"
    ],
    [
      //2nd col array
      "rgba(23,96,135,0.65)", "rgba(145,177,122,0.65)","rgba(148,131,146,0.65)","rgba(180,101,111,0.65)",
      "rgba(151,180,178,0.65)","rgba(209,123,92,0.65)","rgba(66,106,90,0.65)", "rgba(255,209,102,0.65)",
       "rgba(239,71,111,0.65)", "rgba(0,0,0,0.65)","rgba(255,255,255,0.65)","rgb(128,128,128,0.65)"
        ],
    [
      //3rd col array
      "rgba(23,96,135,0.3)", "rgba(145,177,122,0.3)",  "rgba(148,131,146,0.4)","rgba(180,101,111,0.3)",
      "rgba(151,180,178,0.3)","rgba(209,123,92,0.3)","rgba(66,106,90,0.3)", "rgba(255,209,102,0.3)", 
      "rgba(239,71,111,0.3)","rgba(0,0,0,0.3)","rgba(255,255,255,0.3)","rgb(128,128,128,0.3)"
        ]
    ]