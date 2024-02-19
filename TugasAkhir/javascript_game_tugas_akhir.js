var canvas = document.getElementById('GL_Canvas');
var ctx = canvas.getContext('2d');
var playerScores;

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
ctx.fillStyle = 'blue';
scores.display();
// bullet.draw();
pentagon.draw();
triangle.draw();






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
    ctx.fillStyle = 'blue';
    scores.display();
    // bullet.draw();
    pentagon.draw();
    triangle.draw();
    var bullet = {
        x : triangle.atasX,
        y : triangle.atasY,
        vx : 5,
        vy : 5,
        radius : 10,
        colorArc : 'red',
        draw : function(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.colorArc;
            ctx.fill();
        }
    };
    
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
    // console.log(e.key);
    function shootingBullet(){
        bullet.y -= 10;
        bullet.draw();
    }
    if(e.key === ' '){
        console.log(`Berhasil menekan tombol "${e.key}" berhasil`);  
        bullet.draw();
        var shooting = true;
        if(shooting){
            // for(let i = 0; i < 100; i++){
            //     setInterval(, 1000 / 60);
            // } 
        }
    }
    // let keyb = e.key;
    // console.log(keyb);
});





