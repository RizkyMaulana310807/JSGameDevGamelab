var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext("2d");
var circle = {
    x: 100,
    y: 100,
    radius: 25,
    color: '#00a2ff',
    draw: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        }
    };
    circle.draw();

canvas.addEventListener('mousemove', function(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle.x = e.clientX;
    circle.y = e.clientY;
    circle.draw();
});
    