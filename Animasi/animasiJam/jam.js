var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext('2d');
ctx.lineCap = "round";

ctx.translate(canvas.width / 2, canvas.height / 2);

ctx.scale(0.75, 0.75);

function drawClock(){
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    ctx.save();
    ctx.lineWidth = 5;
    for(i  = 0; i < 60; i++){
        if(i % 5 != 0){
            ctx.beginPath();
            ctx.moveTo(180, 0);
            ctx.lineTo(170, 0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
    }
    ctx.restore();
    ctx.save();
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 12;
    for(var i = 0; i < 12; i++){
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(180, 0);
        ctx.lineTo(150, 0);
        ctx.stroke();
    }
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0, 0, 200, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = '#325FA2';

    var now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    ctx.save();
    
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    ctx.save();

    ctx.rotate((Math.PI / 30) * min + (Math.PI /1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(150, 0);
    ctx.stroke();
    ctx.restore();

    ctx.save();

    ctx.rotate(sec * Math.PI / 30);
    ctx.strokeStyle = '#D40000';
    ctx.fillStyle = '#D40000';
    ctx.fillWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(110, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(115, 0, 5, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();

    ctx.restore();
    window.requestAnimationFrame(drawClock);
}

drawClock();