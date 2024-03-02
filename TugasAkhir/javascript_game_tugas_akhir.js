var canvas = document.getElementById('GL_Canvas');
var ctx = canvas.getContext('2d');
var playerScores;
var viewPlayer = 'Menu Display';
var _BossHP = 15000;
var _PlayerHP = 5000;

if(viewPlayer == "Menu Display"){
    menu()
} else if(viewPlayer == "Gameplay Display"){
    gameplay();
} else if(viewPlayer == "Credit Display"){
    credit();
}

function menu(){
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
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.x = this.xAxis(canvas.width);
            this.y = this.yAxis(canvas.height);
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            console.log("X : " + this.x);
            console.log("Y : " + this.y);
            console.log("Width : " + this.width);
            console.log("Height : " + this.height);
        }
    };
    var outerRect = {
        width : 246,
        height : 81,
        x : 0,
        y : 0,
        xAxis : function(canvasWidth){
            return (canvasWidth - this.width) / 2;
        },
        yAxis : function(canvasHeight){
            return (canvasHeight - this.height) / 2;
        },
        color : 'yellow',
        draw : function(){
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.x = this.xAxis(canvas.width);
            this.y = this.yAxis(canvas.height);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 3;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    };
    var title = {
        conten : 'Simplefield Space Shooter',
        font : '70px Impact',
        color : 'white',
        draw : function(){
            ctx.font = this.font;
            ctx.fillStyle = this.color;
            ctx.textAlign = 'center';
            ctx.fillText(this.conten, canvas.width / 2, 200);
        }
    } ;
var text = {
        conten : 'Mulai',
        font : '50px Verdana',
        color : 'white',
        draw : function(){
            ctx.font = this.font;
            ctx.fillStyle = this.color;
            ctx.textAlign = 'center';
            ctx.fillText(this.conten, canvas.width / 2, canvas.height / 2 + 20);
        }
    };
    
var rectCredit = {
    width : 245,
    height : 80,
    x : 1024 - 245,
    y : 768 - 80,
    color : 'blue',
    draw : function(){
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var creditText = {
    conten : 'Credit',
    font : '50px Fantas',
    color : 'white',
    draw : function(){
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = 'right';
        ctx.fillText(this.conten, canvas.width - (rectCredit.width / 4), canvas.height - (rectCredit.height / 4));
        }
}

var rectSetting = {
    width : 150, height : 50, x : 1024 - 150, y : 0, color : 'white',
    draw : function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var textSetting = {
    conten : 'Setting',
    font : '25px Verdana',
    color : 'black',
    draw : function(){
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = 'right';
        ctx.fillText(this.conten, canvas.width - 35, 35);
    }
}

var bgMenu = new Image();
    bgMenu.src = 'images/Down the color wheel with Merrigo.jpg';
    bgMenu.onload = function(){
        ctx.drawImage(bgMenu, 0, 0, canvas.width, canvas.height);
        startMenu();
    };
var bgm = new Audio('audios/BGM-space-by-ManoTIger-Games.mp3');

    function startMenu(){
        // bgm.play();
        rectangle.draw();
        // outerRect.draw();
        rectCredit.draw();
        rectSetting.draw();
        text.draw();
        creditText.draw();
        title.draw();
        textSetting.draw();
    }
    
    canvas.addEventListener('click', function(event){
        var mouseX = event.clientX - canvas.getBoundingClientRect().left;
        var mouseY = event.clientY - canvas.getBoundingClientRect().top;
        
        if(mouseX >= 389.5 && mouseX <= 389.5 + 245 && mouseY >= 344 && mouseY <= 344 + 80){
            // viewPlayer = 'Gameplay Display';
            console.log("Berhasil dijalankan");
        }
        if(mouseX >= 779 && mouseX <= 779 + rectCredit.width && mouseY >= 688 && mouseY <= 688 + rectCredit.height){

        }
        if(mouseX >= 874 && mouseX <= 874 + rectSetting.width && mouseY >= 0 && mouseY <= 0 + rectSetting.height){
            viewPlayer = 'Credit Display';
            console.log(viewPlayer);
        }
        if(viewPlayer == "Menu Display"){
            menu();
        } else if(viewPlayer == "Gameplay Display"){
            gameplay();
        } else if(viewPlayer == "Credit Display"){
            credit();
        }
    });
    
    
    
}

function gameplay(){
    
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
        velocity : 5,
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
            this.atasY += this.velocity;
            this.kananAtasY += this.velocity;
            this.kananBawahY += this.velocity;
            this.kiriBawahY += this.velocity;
            this.kiriAtasY += this.velocity;
            // console.log(this.atasY);
            // console.log(this.kananAtasY);
            // console.log(this.kananBawahY);
            // console.log(this.kiriBawahY);
            // console.log(this.kiriAtasY);
            // console.log(this.kananBawahY + this.kiriBawahY);
            if((this.kananBawahY + this.kiriBawahY) > 1520 || this.atasY < 0){
                this.velocity = -this.velocity;
            }

        }
    };
    
    var scores = {
        text : "Scores : 0",
        playerScore : playerScores,
        x : 150, y : 50,
        font : '25px Fantasy',
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
    var bgGameplay = new Image();
    bgGameplay.src = "images/sky-image-by-wallpaperaccess-com.webp";
    function drawShape(){
        ctx.drawImage(bgGameplay, 0, 0, canvas.width, canvas.height);
        triangle.draw();
        scores.display();
    }

    function drawEnemy(){
        pentagon.draw();
    }
    ctx.clearRect(0, 0 ,canvas.width, canvas.height);
    // drawShape();
    setInterval(() => {
        drawShape();
    }, 40);
setInterval(drawEnemy, 40);
    window.addEventListener('keydown', (e)=>{ 
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
        if(e.key === 'ArrowUp'){
            console.log(`Menekan tombol "${e.key}" berhasil`);
            triangle.atasY -= triangle.vY;
            triangle.kananY -= triangle.vY;
            triangle.kiriY -= triangle.vY;
        }
        if(e.key === 'ArrowDown'){
            console.log(`Menekan tombol "${e.key}" berhasil`);
            triangle.atasY += triangle.vY;
            triangle.kananY += triangle.vY;
            triangle.kiriY += triangle.vY;
        }
        // drawShape();
        if(triangle.kiriX <= 0 || triangle.kananX > canvas.width){
            //console.log("Kamu melewati batas canvas");
            triangle.atasX = 50;
            triangle.atasY = 675;
            triangle.kiriX = 25;
            triangle.kiriY = 750;
            triangle.kananX = 75;
            triangle.kananY = 750;
            console.log("Kamu telah di teleportasi ke titik awal");
            warningScreen.display();
        } 
        if(e.key === " "){
            //spasi di tekan
        }
        
    }); 
}

function credit(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var rectBG = {
        width : canvas.width, height : canvas.height, x : 0, y : 0,
        draw : function(){
            ctx.fillStyle = '#010020';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    rectBG.draw();

    ctx.moveTo(50, 100);
    ctx.lineTo(974, 100);
    ctx.strokeStyle = '#ff9900';
    ctx.stroke();

    var title = {
        content : 'Setting', font : '50px fantasy',
        x : 215, y : 75, color : '#ff9900',
        draw : function(){
            ctx.font = this.font;
            ctx.fillStyle = this.color;
            ctx.fillText(this.content, this.x, this.y);
        }
    }
    var Kembali = {
        content : ' < Kembali', font : '25px fantasy',
        x : canvas.width - 90, y : 75, color : 'white',
        draw : function(){
            ctx.font = this.font;
            ctx.textAlign = 'right';
            ctx.fillStyle = this.color;
            ctx.fillText(this.content, this.x, this.y);
        }
    }
    var buttonBack = {
        width : 150, height : 50, x : canvas.width - 200, y : 40,
        draw : function(){
            ctx.fillStyle = 'transparent';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    Kembali.draw();
    buttonBack.draw();
    title.draw();
    canvas.addEventListener('click', function(e){
        var mouseX = e.clientX - canvas.getBoundingClientRect().left;
        var mouseY = e.clientY - canvas.getBoundingClientRect().top;
        
        if(mouseX >= 824 && mouseX <= 824 + buttonBack.width && mouseY >= 40 && mouseY <= 40 + buttonBack.height){
            // alert("Berhasil mendeteksi klik objek kembali");
            viewPlayer = 'Menu Display';
        }
    });

}

// setInterval(() => {
//     switch(viewPlayer){
//         case 'Menu Display':
//             menu();
//             break;
//         case 'Gameplay Display':
//             gameplay();
//             break;
//         case 'Credit Display':
//             credit();
//             break;
//         default:
//             console.error("Eror code 404");
//             break;
//     }
// }, 500);

