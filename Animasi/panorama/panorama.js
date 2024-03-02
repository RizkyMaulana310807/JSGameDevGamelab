var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext('2d');

var posXImage = 0;
var posYImage = 150;

var widthImage;
var heightImage;

var veloXImage = 1;

var img = new Image();
img.src = 'Image/Image.jpg';
img.onload = function() {
    widthImage = img.width;
    heightImage = img.height;
    drawPanorama();
}

function drawPanorama(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(posXImage > canvas.width){
        posXImage = canvas.width-widthImage;
    }
    if(posXImage > (canvas.width-widthImage)){
        ctx.drawImage(img, posXImage - widthImage + 1, posYImage);
    }
    ctx.drawImage(img, posXImage, posYImage);

    posXImage += veloXImage;
    window.requestAnimationFrame(drawPanorama)

    ctx.drawImage(img, posXImage, posYImage);
};