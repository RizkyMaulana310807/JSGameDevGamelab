var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext("2d");

var circle = {
    x: 200,
    y: 200,
    vx: 5,
    vy: 5,
    radius: 25,
    color: 'orange',
    draw: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

circle.draw();

window.addEventListener('keydown', (e) => {
    console.log(`keydown | Tombol "${e.key}" ditahan`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(e.key === 'ArrowRight'){
        circle.x += circle.vx;
    }
    if(e.key === 'ArrowLeft'){
        circle.x -= circle.vx;
    }
    if(e.key === 'ArrowUp'){
        circle.y -= circle.vy;
    }
    if(e.key === 'ArrowDown'){
        circle.y += circle.vy;
    }
    circle.draw();
});

window.addEventListener('keyup', (e) =>{
    console.log(`keyup | Tombol "${e.key}" dilepas`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle.x = canvas.width/2;
    circle.y = canvas.height/2;
    circle.draw();
});