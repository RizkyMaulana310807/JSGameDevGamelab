var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext("2d");

var circle = {
    x: 200,
    y: 200,
    radius: 15,
    color: '#00c703',
    draw: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

circle.draw();

canvas.addEventListener('click', function(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle.x = e.clientX;
    circle.y = e.clientY;
    circle.draw();
});