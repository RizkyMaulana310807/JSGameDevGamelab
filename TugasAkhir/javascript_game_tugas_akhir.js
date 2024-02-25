var canvas = document.getElementById('GL_Canvas');
var ctx = canvas.getContext('2d');
var playerScores;
var menu = false;



function drawShape(){
    triangle.draw();
    pentagon.draw();
    scores.display();
}

var rectangle = {
    width : 245,
    height : 80,
    x : 0,
    y : 0,
    xAxis : function(canvasWidth){
        return (canvasWidth - this.width) / 2;
    },
    yAxis : function(canvasHeight){
        return (canvasHeight - this.height) / 2;
    },
    color : 'blue',
    draw : function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.x = this.xAxis(canvas.width);
        this.y = this.yAxis(canvas.height);
        ctx.fillStyle = this.color;
        console.log(this.x); //389.5
        console.log(this.y); //344
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }
}

canvas.addEventListener('click', function(event){
    var mouseX = event.clientX - canvas.getBoundingClientRect().left;
    var mouseY = event.clientY - canvas.getBoundingClientRect().top;

    if(mouseX >= 389.5 && mouseX <= 389.5 + rectangle.width && mouseY >= 344 && mouseY <= 344 + rectangle.height){
        alert('Rectangle clicked')
    }
})

var title = {
    conten : 'Mulai',
    font : '50px fantasy',
    color : 'black',
    draw : function(){
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = 'center';
        ctx.fillText(this.conten, canvas.width / 2, canvas.height / 2 + 20);
    }
}

function startMenu(){
    rectangle.draw();
    title.draw();
}
if(menu == false){
    startMenu();
}

var triangle = {
    color : 'blue',
    atasX : 50, atasY : 675,
    kiriX : 25, kiriY : 750,
    kananX : 75, kananY : 750,
    vX : 5, vY : 5,
    draw : function(){
    ctx.beginPath();
    ctx.moveTo(this.atasX, this.atasY); // Atas
    ctx.lineTo(this.kiriX, this.kiriY); // kiri
    ctx.lineTo(this.kananX, this.kananY); // kanan
    ctx.closePath(); // Tutup
    ctx.fillStyle = this.color;
    ctx.fill();
    
    }
};

var pentagon = {
    colorPenta : 'purple',
    atasX : 900, atasY : 24,
    kananAtasX : 1000, kananAtasY : 70,
    kananBawahX : 970, kananBawahY : 150,
    kiriBawahX : 855, kiriBawahY : 150,
    kiriAtasX : 820, kiriAtasY : 70,
    vXPenta : 5, vYPenta : 5,
    velocity : 10,
    draw : function(){
        ctx.beginPath();
        ctx.moveTo(this.atasX, this.atasY); //atas
        ctx.lineTo(this.kananAtasX, this.kananAtasY); //kanan atas
        ctx.lineTo(this.kananBawahX, this.kananBawahY); //kanan bawah
        ctx.lineTo(this.kiriBawahX, this.kiriBawahY) //kiri bawah
        ctx.lineTo(this.kiriAtasX, this.kiriAtasY) //kiri atas
        ctx.closePath();
        // ctx.stroke();
        ctx.fillStyle = this.colorPenta;
        ctx.fill();
    }
};

var scores = {
    text : "Scores : ",
    playerScore : playerScores,
    x : 50, y : 50,
    font : '25px arial',
    color : 'blue',
    display : function(){
        ctx.font = this.font;
        ctx.fillText(this.text, this.x, this.y);
    }
}

var warningScreen = {
    text : "Anda telah melewati batas canvas",
    x : canvas.width / 2 - 100, y : 760,
    color : 'red',
    font : '15px arial',
    display : function(){
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y)
    }
}
// ctx.fillStyle = 'blue';
// drawAll();






window.addEventListener('keydown', (e)=>{       
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(e.key === 'ArrowRight'){
        console.log(`Menekan tombol "${e.key}" berhasil`);
        triangle.atasX += triangle.vX;
        triangle.kananX += triangle.vX;
        triangle.kiriX += triangle.vX;
        
    }
    if(e.key === 'ArrowLeft'){
        console.log(`Menekan tombol "${e.key}" berhasil`);
        triangle.atasX -= triangle.vX;
        triangle.kananX -= triangle.vX;
        triangle.kiriX -= triangle.vX;
        
    }
    if(triangle.kiriX <= 0 || triangle.kananX > canvas.width){
        console.log("Kamu melewati batas canvas");
        triangle.atasX = 50;
        triangle.atasY = 675;
        triangle.kiriX = 25;
        triangle.kiriY = 750;
        triangle.kananX = 75;
        triangle.kananY = 750;
        console.log("Kamu telah di teleportasi ke titik awal");
        warningScreen.display();
    }
    var bullet = {
        x : triangle.atasX,
        y : triangle.atasY,
        vx : 5,
        vy : 5,
        radius : 10,
        velocity : 10,
        colorArc : 'red',
        draw : function(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.colorArc;
            ctx.fill();
        }
    };
    drawAll(); 
});

