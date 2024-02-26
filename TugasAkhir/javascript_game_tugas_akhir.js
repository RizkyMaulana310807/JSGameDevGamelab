var canvas = document.getElementById('GL_Canvas');
var ctx = canvas.getContext('2d');
var playerScores;
var viewPlayer = 'Credit Display';





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
        }
    };
    var title = {
        conten : 'Simplefield Space Shooter',
        font : '70px fantasy',
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
        font : '50px fantasy',
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
    font : '50px fantasy',
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
    font : '25px fantasy',
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
    
        if(mouseX >= 389.5 && mouseX <= 389.5 + rectangle.width && mouseY >= 344 && mouseY <= 344 + rectangle.height){
            viewPlayer = 'Gameplay Display';
            console.log(viewPlayer);
        }
        if(mouseX >= 779 && mouseX <= 779 + rectCredit.width && mouseY >= 688 && mouseY <= 688 + rectCredit.height){

        }
        if(mouseX >= 874 && mouseX <= 874 + rectSetting.width && mouseY >= 0 && mouseY <= 0 + rectSetting.height){
            viewPlayer = 'Credit Display';
            console.log(viewPlayer);
        }
        
    });
    
    
    
}

function gameplay(){
    function drawShape(){
        triangle.draw();
        pentagon.draw();
        scores.display();
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
    ctx.clearRect(0, 0 ,canvas.width, canvas.height);
    drawShape();
    window.addEventListener('keydown', (e)=>{       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(e.key === 'ArrowRight'){
            console.log(`Menekan tombol "${e.key}" berhasil`);
            triangle.atasX += triangle.vX;
            triangle.kananX += triangle.vX;
            triangle.kiriX += triangle.vX;
            
        }else if(e.key === 'ArrowLeft'){
            console.log(`Menekan tombol "${e.key}" berhasil`);
            triangle.atasX -= triangle.vX;
            triangle.kananX -= triangle.vX;
            triangle.kiriX -= triangle.vX;
            
        }else if(triangle.kiriX <= 0 || triangle.kananX > canvas.width){
            console.log("Kamu melewati batas canvas");
            triangle.atasX = 50;
            triangle.atasY = 675;
            triangle.kiriX = 25;
            triangle.kiriY = 750;
            triangle.kananX = 75;
            triangle.kananY = 750;
            console.log("Kamu telah di teleportasi ke titik awal");
            warningScreen.display();
        } else{
            return false;
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

setInterval(() => {
    switch(viewPlayer){
        case 'Menu Display':
            menu();
            break;
        case 'Gameplay Display':
            gameplay();
            break;
        case 'Credit Display':
            credit();
            break;
        default:
            console.error("Eror code 404");
            break;
    }
}, 500);

