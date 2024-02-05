var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext('2d');

var earth = new Image();
var moon = new Image();
var sun = new Image();

earth.src = 'Images/animations_earth.png';
moon.src = 'Images/animations_moon.png';
sun.src = 'Images/animations_sun.png';

function draw(){
ctx.fillStyle = 'black';

ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.save();

ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.drawImage(sun, -sun.width / 2, -sun.height / 2);

ctx.strokeStyle = 'white';
ctx.beginPath();
ctx.arc(0, 0, 150, 0, Math.PI * 2, false);
ctx.stroke();

var time = new Date();
ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
ctx.translate(150, 0);
ctx.drawImage(earth, -13, -13, 26, 26);

ctx.save();
ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
ctx.translate(0, 25);
ctx.drawImage(moon, -5, -5, 10, 10);
ctx.restore();

ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
ctx.fillRect(0, -13, 50, 26);

ctx.restore();

window.requestAnimationFrame(draw);
}

draw();

