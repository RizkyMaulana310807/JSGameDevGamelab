var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext('2d');

var posXRect = 0;
var posYRect = 200;

var widthRect = 100;
var heightRect = 100;

var veloXRect = 5;

function drawRect(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.fillRect(posXRect, posYRect, widthRect, heightRect);
    posXRect += veloXRect;
    window.requestAnimationFrame(drawRect);

    if((posXRect + widthRect) + veloXRect > canvas.width || posXRect + veloXRect < 0){
        veloXRect = -veloXRect;
    }
};

drawRect();
