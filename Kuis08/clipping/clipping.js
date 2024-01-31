var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext('2d');
var radRect = ctx.createLinearGradient(0, -350, 0, 350);
radRect.addColorStop(0.5, '#232256');
radRect.addColorStop(1, '#143778');
ctx.fillRect(0, 0, canvas.width, canvas.height);

var radTriangle = ctx.createLinearGradient(0, 255, 0, 350);
radTriangle.addColorStop(0.5, '#232556');
radTriangle.addColorStop(1, '#ffcf75');
ctx.fillStyle = radTriangle;

ctx.beginPath();
ctx.moveTo(canvas.width / 1, 255);
ctx.lineTo(canvas.width / 1, -255);
ctx.lineTo(0, 480);
ctx.closePath();
ctx.fill();

ctx.clip();

for(var j = 1; j < 100; j++){
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(canvas.width - Math.floor(Math.random() * canvas.width), canvas.height - Math.floor(Math.random() * canvas.height));

    drawStar(ctx, Math.floor(Math.random() * 6) + 2);
    ctx.restore();
}

function drawStar(ctx, r){
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(r, 0);
    for(var i = 0; i < 9; i++){
        ctx.rotate(Math.PI / 5);
        if(i % 2 === 0){
            ctx.lineTo((r / 0.525731) * 0.200811, 0);
        } else{
            ctx.lineTo(r, 0);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}