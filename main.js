canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverwidth=95;
roverheight=100;
roverX=10;
roverY=10;
backroundimage="mars.jpg";
roverimage="rover.png";
function add(){
    backroundimageTag=new Image();
    backroundimageTag.onload=uploadbackround;
    backroundimageTag.src=backroundimage;

    roverimageTag=new Image();
    roverimageTag.onload=uploadrover;
    roverimageTag.src=roverimage;
} 
function uploadbackround(){
    ctx.drawImage(backroundimageTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
ctx.drawImage(roverimageTag,roverX,roverY,roverwidth,roverheight);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

 if (keypressed=='38'){
    // up();
     console.log("up");
    
 }
 if (keypressed=='40'){
   // down();
    console.log("down");
   
}
if (keypressed=='37'){
  //  left();
    console.log("left");
   
}
if (keypressed=='39'){
  //  right();
    console.log("right");
   
}
}