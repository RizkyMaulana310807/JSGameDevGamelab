var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext('2d');

var posXRect = 0;
var posYRect = 200;

var widthRect = 100;
var heightRect = 100;

var veloXRect = 5;

function drawRect(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(128, 0, 0, 100)";
    ctx.fillRect(posXRect, posYRect, widthRect, heightRect);
    posXRect += veloXRect;
    window.requestAnimationFrame(drawRect);

    if((posXRect + widthRect) + veloXRect > canvas.width || posXRect + veloXRect < 0){
        veloXRect = -veloXRect;
    }
};

drawRect();


var canvas = document.getElementById("GL_Canvas1");
var ctxJam = canvas.getContext('2d');
ctxJam.lineCap = "round";

ctxJam.translate(canvas.width / 2, canvas.height / 2);

ctxJam.scale(0.75, 0.75);

function drawClock(){
    ctxJam.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    ctxJam.save();
    ctxJam.lineWidth = 5;
    for(i  = 0; i < 60; i++){
        if(i % 5 != 0){
            ctxJam.beginPath();
            ctxJam.moveTo(180, 0);
            ctxJam.lineTo(170, 0);
            ctxJam.stroke();
        }
        ctxJam.rotate(Math.PI / 30);
    }
    ctxJam.restore();
    ctxJam.save();
    ctxJam.strokeStyle = 'orange';
    ctxJam.lineWidth = 12;
    for(var i = 0; i < 12; i++){
        ctxJam.beginPath();
        ctxJam.rotate(Math.PI / 6);
        ctxJam.moveTo(180, 0);
        ctxJam.lineTo(150, 0);
        ctxJam.stroke();
    }
    ctxJam.lineWidth = 12;
    ctxJam.beginPath();
    ctxJam.strokeStyle = '#325FA2';
    ctxJam.arc(0, 0, 200, 0, Math.PI * 2, true);
    ctxJam.stroke();
    ctxJam.restore();

    ctxJam.save();
    ctxJam.rotate(-Math.PI / 2);
    ctxJam.strokeStyle = '#325FA2';

    var now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    ctxJam.save();
    
    ctxJam.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    ctxJam.lineWidth = 14;
    ctxJam.beginPath();
    ctxJam.moveTo(-20, 0);
    ctxJam.lineTo(80, 0);
    ctxJam.stroke();
    ctxJam.restore();

    ctxJam.save();

    ctxJam.rotate((Math.PI / 30) * min + (Math.PI /1800) * sec);
    ctxJam.lineWidth = 10;
    ctxJam.beginPath();
    ctxJam.moveTo(-20, 0);
    ctxJam.lineTo(150, 0);
    ctxJam.stroke();
    ctxJam.restore();

    ctxJam.save();

    ctxJam.rotate(sec * Math.PI / 30);
    ctxJam.strokeStyle = 'rgba(128, 0, 0, 100)';
    ctxJam.fillStyle = 'rgba(128, 0, 0, 100)';
    ctxJam.fillWidth = 4;
    ctxJam.beginPath();
    ctxJam.moveTo(-30, 0);
    ctxJam.lineTo(110, 0);
    ctxJam.stroke();
    ctxJam.beginPath();
    ctxJam.arc(115, 0, 5, 0, Math.PI * 2, true);
    ctxJam.stroke();
    ctxJam.beginPath();
    ctxJam.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctxJam.fill();
    ctxJam.restore();

    ctxJam.restore();
    window.requestAnimationFrame(drawClock);
}

drawClock();




var canvas = document.getElementById("GL_Canvas2");
var ctxGravitasi = canvas.getContext('2d');

var ball = {
    x: 200, 
    y: 200,
    vx: 5, 
    vy: 2,
    radius: 25,
    color: 'rgba(128, 0, 0, 100)', //Merah Maroon
    draw: function(){
        ctxGravitasi.beginPath();
        ctxGravitasi.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctxGravitasi.closePath();
        ctxGravitasi.fillStyle = this.color;
        ctxGravitasi.fill();
    }
};

var raf;
function drawBall(){
    
    ctxGravitasi.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctxGravitasi.fillRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;

    ball.vy *= .99;
    ball.vy += .25;

    raf = window.requestAnimationFrame(drawBall);

    if(ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0){
        ball.vx = -ball.vx;
    }
    if(ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0){
        ball.vy = -ball.vy;
    }

    
}
var running = false;
canvas.addEventListener('click', function(e){
    if(!running){
        raf = window.requestAnimationFrame(drawBall);
        running = true;
    }
}); 
canvas.addEventListener('mouseout', function(e){
    window.cancelAnimationFrame(raf);
    running = false;
});
canvas.addEventListener('mousemove', function(e){
    ctxGravitasi.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctxGravitasi.fillRect(0, 0, canvas.width, canvas.height);
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
})

ball.draw();




var canvas = document.getElementById("GL_Canvas3");
var ctxPanorama = canvas.getContext('2d');

var posXImage = 0;
var posYImage = 150;

var widthImage;
var heightImage;

var veloXImage = 1;

var img = new Image();
img.src = 'Images/Image.jpg';
img.onload = function() {
    widthImage = img.width;
    heightImage = img.height;

    drawPanorama();
}

function drawPanorama(){
    ctxPanorama.clearRect(0, 0, canvas.width, canvas.height);

    if(posXImage > canvas.width){
        posXImage = canvas.width-widthImage;
    }
    if(posXImage > (canvas.width-widthImage)){
        ctxPanorama.drawImage(img, posXImage - widthImage + 1, posYImage);
    }
    ctxPanorama.drawImage(img, posXImage, posYImage);

    posXImage += veloXImage;
    window.requestAnimationFrame(drawPanorama)

    ctxPanorama.drawImage(img, posXImage, posYImage);
};




var canvas = document.getElementById("GL_Canvas4");
var ctxSolarSystem = canvas.getContext('2d');

var earth = new Image();
var moon = new Image();
var sun = new Image();

earth.src = 'Images/animations_earth.png';
moon.src = 'Images/animations_moon.png';
sun.src = 'Images/animations_sun.png';

function draw(){
ctxSolarSystem.fillStyle = 'black';

ctxSolarSystem.fillRect(0, 0, canvas.width, canvas.height);

ctxSolarSystem.save();

ctxSolarSystem.translate(canvas.width / 2, canvas.height / 2);
ctxSolarSystem.drawImage(sun, -sun.width / 2, -sun.height / 2);

ctxSolarSystem.strokeStyle = 'white';
ctxSolarSystem.beginPath();
ctxSolarSystem.arc(0, 0, 150, 0, Math.PI * 2, false);
ctxSolarSystem.stroke();

var time = new Date();
ctxSolarSystem.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
ctxSolarSystem.translate(150, 0);
ctxSolarSystem.drawImage(earth, -13, -13, 26, 26);

ctxSolarSystem.save();
ctxSolarSystem.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
ctxSolarSystem.translate(0, 25);
ctxSolarSystem.drawImage(moon, -5, -5, 10, 10);
ctxSolarSystem.restore();

ctxSolarSystem.fillStyle = 'rgba(0, 0, 0, 0.5)';
ctxSolarSystem.fillRect(0, -13, 50, 26);

ctxSolarSystem.restore();

window.requestAnimationFrame(draw);
}

draw();

