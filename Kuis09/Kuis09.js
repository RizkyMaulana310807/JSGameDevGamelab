var canvas = document.getElementById("GL_Canvas");
var ctxGravitasi = canvas.getContext('2d');

var ball = {
    x: 200, 
    y: 200,
    vx: 5, 
    vy: 2,
    radius: 25,
    color: 'rgba(184, 115, 51)', //Copper
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