var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext("2d");
var square = {
    x: 200,
    y: 200,
    width: 90,
    height : 90,
    color: '#00ccff',
    draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

var rectangle = {
    x: 330,
    y: 220,
    vx: 1,
    vy: 1,
    width: 120,
    height: 50,
    color: '#00bd1c',
    draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};
var circle = {
    x: 120,
    y: 250,
    radius: 20,
    color: '#bd8100',
    draw: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};
var drawAllShapes = function(){
    square.draw();
    rectangle.draw();
    circle.draw();
};

drawAllShapes();

canvas.addEventListener('mousemove', function(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle.x = e.clientX;
    circle.y = e.clientY;

    if(isCircleCollisindSquare(circle, square)){
        circle.color = '#ff2667';
    } else{
        circle.color = '#bd8100';
    }

    drawAllShapes();
});
window.addEventListener('keydown', (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(e.key === 'ArrowRight'){
        rectangle.x += rectangle.vx;
    }
    if(e.key  === 'ArrowLeft'){
        rectangle.x -= rectangle.vx;
    }
    if(e.key === 'ArrowUp'){
        rectangle.y -= rectangle.vy;
    }
    if(e.key === 'ArrowDown'){
        rectangle.y += rectangle.vy;
    }

    if(isRectangleCollidindSquare(rectangle, square)){
        rectangle.color = '#ff2667';
    } else{
        rectangle.color = '#00bd1c';
    }

    drawAllShapes();
});

var isCircleCollisindSquare = function(circleParam, squareParam){
    var distX = Math.abs(circleParam.x - squareParam.x - squareParam.width / 2);
    var distY = Math.abs(circleParam.y - squareParam.y - squareParam.height / 2);

    if(distX > (squareParam.width / 2 + circleParam.radius)){
        return false;
    }
    if(distY > (squareParam.height / 2 + circleParam.radius)){
        return false;
    }
    if(distX <= (squareParam.width / 2)){
        return true;
    }
    if(distY <= (squareParam.height / 2)){
        return true;
    }
    var dx = distX - squareParam.width / 2;
    var dy = distY - squareParam.height / 2;

    return (dx * dx + dy * dy <= (circleParam.radius * circleParam.radius));
};

function isRectangleCollidindSquare(rectangleParam, squareParam){
    let collided = false;

    if(rectangleParam.x < squareParam.x + squareParam.width && rectangleParam.x + rectangleParam.width > squareParam.x && rectangleParam.y < squareParam.y + squareParam.height && rectangleParam.y + rectangleParam.height > squareParam.y){
        collided = true;
    }
    return collided;
};