// Game Item
var _BossHP = 900;
var scores = 0;
var gameOver = false;  
var laserShoot = new Audio();
// laserShoot.src = 'audios/LASER GUN SOUND EFFECT - FREE.mp3';
var explosionbullet = new Audio();
explosionbullet.src = 'audios/Small Bomb Explosion Sound Effect (mp3cut.net).mp3';
//BGM
var soundBGM = new Audio();
soundBGM.src = 'audios/Galaxy.ogg';
var bgmActive = false;
// Layer BG
var BGLayer = document.getElementById("BG_layer");
var ctxBG = BGLayer.getContext("2d");
var BG_space = new Image();
BG_space.src = "images/Starfield-Stars-Universe-FlyBy-Motion-Background-Video-Loop-Sample2-1.jpg";
var posXImage = 0;
var posYImage = 0;
var widthImage;
var heightImage;
var veloXImage = 1;
var creditLayer = document.getElementById('credit_layer');
var creditCtx = creditLayer.getContext('2d');
var menuLayer = document.getElementById("menu_layer");
var ctxMenu = menuLayer.getContext('2d');
var gearImage = new Image();
var gameplayObject = document.getElementById('gameplay_player_enemy');
var gameCtx = gameplayObject.getContext('2d');
var isShooting = true;
var gameOverLayer = document.getElementById('game_over');
var gameOverCtx = gameOverLayer.getContext('2d');
var gameHUD = document.getElementById('gameplay_hud');
var ctxHUD = gameHUD.getContext('2d');

gameplayHUD();
showCredit();
menu_display();
// showGameover();
BG_space.onload = function(){
    widthImage = BG_space.width;
    heightImage = BG_space.height;
    drawAll();
};
function drawAll(){
    drawPanorama();
}
function drawPanorama() {
    ctxBG.clearRect(0, 0, BGLayer.width, BGLayer.height);
    ctxBG.drawImage(BG_space, posXImage, posYImage);
    ctxBG.drawImage(BG_space, posXImage + widthImage, posYImage);
    posXImage -= veloXImage;
    if (posXImage <= -widthImage) {
        posXImage = 0;
    }
    window.requestAnimationFrame(drawPanorama);
};
// Layer Hud

gearImage.src = 'images/gear-icon-by-jooinn-com.png';
function drawGear(){
    ctxMenu.drawImage(gearImage, 0, 0, 200, 200);
}
function drawRectangle(x, y, width, height, color, ctxC){
    ctxC.fillStyle = color;
    ctxC.fillRect(x, y, width, height);
    console.log("Rectangle x : " + x);
    console.log("Rectangle y : " + y);
    console.log("Rectangle width : " + width);
    console.log("Rectangle height : " + height);
};
function displayTitle(font, color, align, text, x, y, ctxC){
    ctxC.font = font;
    ctxC.fillStyle = color;
    ctxC.textAlign = align;
    ctxC.fillText(text, x, y);
}
function displayStrokeText(font, color, align, text, x, y, lineWidth, ctxC){
    ctxC.font = font;
    ctxC.textAlign = align;
    ctxC.strokeStyle = color;
    ctxC.lineWidth = lineWidth;
    ctxC.strokeText(text, x, y); 
}
function timeOutMenu(){
    function showMenu1(){
        rectStroke((menuLayer.width - 200) / 2 + 15, (menuLayer.height -75) / 2 + 15, 200, 75, 'yellow', ctxMenu);
        customRectStroke(800 + 15, 24 + 15, 1000 + 15, 24 + 15, 950 + 15, 85 + 15, 750 + 15, 85 + 15, 'yellow', ctxMenu);
    customRectStroke(700 - 15, 780 - 15, 1000 - 15, 768 - 15, 1024 - 15, 700 - 15, 750 - 15, 700 - 15, 'yellow', ctxMenu)

    }
    function showMenu2(){
        drawRectangle((menuLayer.width - 200) / 2, (menuLayer.height - 75) / 2, 200, 75, 'red', ctxMenu);
    customRectangle(700, 780, 1000, 768, 1024, 700, 750, 700, 'red', ctxMenu);
        displayStrokeText('71px fantasy', 'yellow', 'center', 'Mulai', menuLayer.width / 2 + 5, menuLayer.height / 2 + 25, 1, ctxMenu);
        customRectangle(800, 24, 1000, 24, 950, 85, 750, 85, 'red', ctxMenu);
        displayStrokeText('45px impact', 'yellow', 'center', 'Credit', 875 + 5, 70 + 5, ctxMenu);
    }
    function showMenu3(){
        displayStrokeText('90px Impact', 'yellow', 'center', 'Space', menuLayer.width /  2 - 30, menuLayer.height / 4 - 30, 1, ctxMenu);    
    displayTitle('70px impact', 'white', 'center', 'BGM', menuLayer.width - 150, menuLayer.height - 5, ctxMenu);

    }
    function showMenu4(){
        displayStrokeText('70px Impact', 'yellow', 'center', 'Shooter', menuLayer.width / 2 + 65, menuLayer.height / 4 + 30, 1, ctxMenu);
    }
    function showMenu5(){
        displayTitle('70px fantasy', 'white', 'center', 'Mulai', menuLayer.width / 2 , menuLayer.height / 2 + 17, ctxMenu);
    }
    function showMenu6(){
        displayTitle('90px Impact', 'white', 'center', 'Space', menuLayer.width /  2 - 50, menuLayer.height / 4 - 50, ctxMenu);
    }
    function showMenu7(){
        displayTitle('70px Impact', 'white', 'center', 'Shooter', menuLayer.width / 2 + 50, menuLayer.height / 4 + 10, ctxMenu);
        displayTitle('45px impact', 'white', 'center', 'Credit', 875, 70, ctxMenu);
        
    }
    setTimeout(showMenu1, 1000);
    setTimeout(showMenu2, 1100);
    setTimeout(showMenu3, 1200);
    setTimeout(showMenu4, 1300);
    setTimeout(showMenu5, 1400);
    setTimeout(showMenu6, 1500);
    setTimeout(showMenu7, 1600);
}
function customRectangle(x1, y1, x2, y2, x3, y3, x4, y4, color, ctxC){
            ctxC.beginPath();
            ctxC.moveTo(x1, y1); 
            ctxC.lineTo(x2, y2);
            ctxC.lineTo(x3, y3);
            ctxC.lineTo(x4, y4);
            ctxC.closePath();
            ctxC.fillStyle = color;
            ctxC.fill();
}
function customRectStroke(x1, y1, x2, y2, x3, y3, x4, y4, color, ctxC){
    ctxC.strokeStyle = color;
    ctxC.beginPath();
    ctxC.moveTo(x1, y1); 
    ctxC.lineTo(x2, y2);
    ctxC.lineTo(x3, y3);
    ctxC.lineTo(x4, y4);
    ctxC.closePath();
    ctxC.stroke();
}
function rectStroke(x, y, width, height, color, ctxC){
    ctxC.strokeStyle = color;
    ctxC.strokeRect(x, y, width, height);
}
function triangle(x1, y1, x2, y2, x3, y3, color, ctxC){
        // var ctx = ctxC;
        ctxC.beginPath();
        ctxC.moveTo(x1, y1); // Atas
        ctxC.lineTo(x2, y2); // kiri
        ctxC.lineTo(x3, y3); // kanan
        ctxC.closePath(); // Tutup
        ctxC.fillStyle = color;
        ctxC.fill();
}
function pentagon(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, color, ctxC){
        ctxC.beginPath();
        ctxC.moveTo(x1, y1);
        ctxC.lineTo(x2, y2);
        ctxC.lineTo(x3, y3);
        ctxC.lineTo(x4, y4);
        ctxC.lineTo(x5, y5);
        ctxC.closePath();
        ctxC.fillStyle = color;
        ctxC.fill();
}
function drawAllObjectGameplay(){
    gameCtx.clearRect(0, 0, gameplayObject.width, gameplayObject.height);
    triangle(player.x1, player.y1, player.x2, player.y2, player.x3, player.y3, player.color, gameCtx);
    // pentagon(enemy.x1, enemy.y1, enemy.x2, enemy.y2, enemy.x3, enemy.y3, enemy.x4, enemy.y4, enemy.x5, enemy.y5, enemy.color, gameCtx);
    drawPentagon(enemy.x1, enemy.y1, 75, 'purple', gameCtx);
    enemyMovesUpdater();
    createBullet(gameCtx);
    moveBullet();
    detectCollision();
    detectCollisionPlayer();
}
function menu_display(){
    timeOutMenu();
    menuLayer.addEventListener('click', function(e){
        var mouseX = e.clientX - menuLayer.getBoundingClientRect().left;
        var mouseY = e.clientY - menuLayer.getBoundingClientRect().top;
        
        if(mouseX >= 412 && mouseX <= 412 + 200 && mouseY >= 346.5 && mouseY <= 346.5 + 75){
            console.log("Fungsi Untuk Berpindah ke Layer Gameplay Seharusnya Sudah Berhasil");
            gameplay_object();
            scores = 0;
            player.x1 = 50;
            player.y1 = 100;
            player.x2 = 150;
            player.y2 = 150;
            player.x3 = 50;
            player.y3 = 200;
            setTimeout(() => {
                gameOverLayer.style.display = 'none';
                menuLayer.style.display = 'none';
                gameplayObject.style.display = 'block';
                gameHUD.style.display = 'block';  
            }, 1000);
        }
        if(mouseX >= 800 && mouseX <= 1000 && mouseY >= 24 && mouseY <= 85){
            console.log("Berhasil menekan di credit");
            setTimeout(() => {
                menuLayer.style.display = 'none';
                creditLayer.style.display = 'block';
                
            }, 1000);
        }
        if((mouseX >= 700 && mouseX <= 1024) && (mouseY >= 700 && mouseY <= 768)){
            console.log(bgmActive);
            console.log("Fungsi Play BGM Seharusnya Sudah Berhasil");
            if(!bgmActive){
                bgmActive = true;
                soundBGM.play();
                soundBGM.onended = function(){
                    soundBGM.currentTime = 0;
                    soundBGM.play();
                }
            } else if(bgmActive){
                bgmActive = false;
                soundBGM.pause();
            }
        }
    });


};
function drawPentagon(centerX, centerY, radius, color, ctxC){
    ctxC.beginPath();
    var x = centerX + radius * Math.cos(0);
    var y = centerY + radius * Math.sin(0);
    ctxC.moveTo(x, y);
    for(var i = 1; i <= 5; i++){
        x = centerX + radius * Math.cos(i * 2 * Math.PI / 5);
        y = centerY + radius * Math.sin(i * 2 * Math.PI / 5);
        ctxC.lineTo(x, y);
    }
    ctxC.lineTo(centerX + radius * Math.cos(0), centerY + radius * Math.sin(0));
    ctxC.fillStyle = color;
    // ctxC.lineWidth = 2;
    // ctxC.stroke();
    ctxC.fill();
    ctxC.closePath();
}
function shootSFX(){
    laserShoot.play();
    // laserShoot.onended = function(){
    //     laserShoot.currentTime = 0;
    // }
}
function explosionDetect(){
    explosionbullet.play();
}
function enemyMovesUpdater(){
    enemy.y1 += enemy.velocity;
    enemy.y2 += enemy.velocity;
    enemy.y3 += enemy.velocity;
    enemy.y4 += enemy.velocity;
    enemy.y5 += enemy.velocity;

    if(enemy.y1 == 4 || (enemy.y3 >= gameplayObject.height && enemy.y4 >= gameplayObject.height)){
        enemy.velocity = -enemy.velocity;
    }
    // console.log(enemy.y1);
}
var directionPlayer = {
    up : true, down : true, left : true, right : true,
    testDirectionPlayer : function(){
        if(player.y1 == 0){
            this.up = false;
            // console.log(this.up);
            // console.log("gameplay : " + gameplayObject.height);
        } else {
            this.up = true;
            // console.log(this.up);
        }
        if(player.y3 >= gameplayObject.height){
            this.down = false;
        } else{
            this.down = true;
        }
        if(player.x1 == 0 && player.x3 == 0){
            this.left = false;
        } else {
            this.left = true;
        }
        if(player.x2 >= gameplayObject.width){
            this.right = false;
        } else {
            this.right = true;
        }
    }
}
var player = {
    x1 : 50, y1 : 100, x2 : 150, y2 : 150, x3 : 50, y3 : 200,
    color : 'blue'
};
var enemy = {
    x1 : 900, y1 : 24, x2 : 1000, y2 : 70, x3 : 970, y3 : 150, x4 : 855, y4 : 150, x5 : 820, y5 : 70,
    color : 'purple', velocity : 10, radius : 75
}
// let bullet = {
//     spawnX : player.x2, spawnY : player.y2, radius : 50, color : 'red', speed : 10,
// }
var bulletsContainer = [];
function pushBullet() {
    let bullet = {
        x: player.x2,
        y: player.y2,
        width: 5,
        height: 5,
        radius : 5,
        speed: 10,
        color: 'red'
    };
    bulletsContainer.push(bullet);
}
function createBullet(ctxC){
    for(let i = 0; i < bulletsContainer.length; i++){
        ctxC.fillStyle = 'red';
        ctxC.beginPath();
        ctxC.arc(bulletsContainer[i].x, bulletsContainer[i].y, 5, 0, Math.PI * 2, true);
        ctxC.fill();
    }
}
function moveBullet(){
    for(let i = 0; i < bulletsContainer.length; i++){
        bulletsContainer[i].x += 15;
        if(bulletsContainer[i].x > gameplayObject.width){
            bulletsContainer.splice(i, 1);
            i--;
        }
    }
    // window.requestAnimationFrame(moveBullet);
}
function detectCollision(){
    bulletsContainer.forEach(function(bullet) {
        let distance = Math.sqrt(Math.pow(bullet.x - enemy.x1, 2) + Math.pow(bullet.y - enemy.y1, 2));
        if (distance < bullet.radius + enemy.radius) {
            enemy.color = "red";
            explosionDetect();
            explosionbullet.currentTime = 0;
            _BossHP -= 100;
            scores++;
            console.log(scores);
            console.log("tabrakan terdeteksi");
            bulletsContainer = bulletsContainer.filter(function(b) {
                return b !== bullet;
            });
        }
    });
}

let gameloop;
function detectCollisionPlayer() {
    var playerX = (player.x1 + player.x2 + player.x3) / 3;
    var playerY = (player.y1 + player.y2 + player.y3) / 3;

    var distanceX = playerX - enemy.x1;
    var distanceY = playerY - enemy.y1;
    var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < 50 + enemy.radius) {
        console.log("Collision detected!");
        showGameover();
        // gameOverCtx.fillRect(0, 0, gameOverLayer.width, gameOverLayer.height);
        gameOverLayer.style.display = 'block';
        showGameover();
        clearInterval(gameloop);
        // gameOver = true;
    } //else{
        // gameOver = false;
    // }
}

function gameplay_object(){

    
    gameloop = setInterval(drawAllObjectGameplay, 40);

    
    window.addEventListener('keydown', function(e){
        directionPlayer.testDirectionPlayer();
        if(e.key === 'ArrowUp' && directionPlayer.up){
            player.y1 -= 15;
            player.y2 -= 15;
            player.y3 -= 15;
        }
        if(e.key === 'ArrowDown' && directionPlayer.down){
            player.y1 += 15;
            player.y2 += 15;
            player.y3 += 15;
        }
        if(e.key === 'ArrowRight' && directionPlayer.right){
            player.x1 += 15;
            player.x2 += 15;
            player.x3 += 15;
        }
        if(e.key === 'ArrowLeft' && directionPlayer.left){
            player.x1 -= 15;
            player.x2 -= 15;
            player.x3 -= 15;
        }
        // console.log(`Menekan tombol "${e.key}" berhasil`);
        if(e.key === ' ' && isShooting){
            pushBullet();
            console.log(bulletsContainer);
            isShooting = false;
            if(!isShooting){
                setTimeout(() => {
                    isShooting = true;
                    shootSFX();
                }, 500);
            } else{
                isShooting = false;
            }
        }
    });
}


function gameplayHUD(){
    setInterval(() => {
    customRectStroke(0, 0 + 9, 300 + 9, 0 + 9, 250 + 9, 50 + 9, 0, 50 + 9, "yellow", ctxHUD);
    customRectangle(0, 0, 300, 0, 250, 50, 0, 50, 'red', ctxHUD);
    displayTitle('40px arial', 'white', 'center', 'Scores : ' + scores, 90, 40, ctxHUD)
    }, 40);
}
// gameplayHUD();
function showGameover(){
    gameOverCtx.clearRect(0, 0, gameOverLayer.width, gameOverLayer.height);
    displayTitle('100px impact', 'red', 'center', 'Game Over', gameOverLayer.width / 2, gameOverLayer.height / 2, gameOverCtx);
    displayTitle('50px arial', 'white', 'center', 'High Score : ' + scores, gameOverLayer.width / 2, gameOverLayer.height / 2 + 50, gameOverCtx);
    rectStroke(gameOverLayer.width / 2 - 100 + 15, gameOverLayer.height / 2 + 75 + 15, 200, 60, 'yellow', gameOverCtx);
    drawRectangle(gameOverLayer.width / 2 - 100, gameOverLayer.height / 2 + 75, 200, 60, 'red', gameOverCtx);
    displayTitle('50px arial', 'white', 'center', 'Menu', gameOverLayer.width / 2, gameOverLayer.height / 2 + 120, gameOverCtx);
    gameOverLayer.addEventListener('click', function(e){
        var mouseX = e.clientX - menuLayer.getBoundingClientRect().left;
        var mouseY = e.clientY - menuLayer.getBoundingClientRect().top;
        
        if(mouseX >= gameOverLayer.width / 2 - 100 && mouseX <= gameOverLayer.width / 2 + 200 && mouseY >= gameOverLayer.height / 2 + 75 && mouseY <= gameOverLayer.height / 2 + 75 + 60){
            console.log("Fungsi Untuk Berpindah ke Layer Menu Seharusnya Sudah Berhasil");
            setTimeout(() => {
                gameOverLayer.style.display = 'none';
                gameHUD.style.display = 'none';
                gameplayObject.style.display = 'none';
                menuLayer.style.display = 'block'; 
            }, 1000);
        }
    })
}
// showGameover();
function showCredit(){
    creditCtx.fillStyle = 'black';
    creditCtx.fillRect(0, 0, creditLayer.width, creditLayer.height);
    displayTitle('35px arial', 'white', 'center', 'Rizky Maulana', creditLayer.width / 2, 30, creditCtx);
    displayTitle('35px arial', 'white', 'center', 'background : MotionBackground', creditLayer.width / 2, 70, creditCtx);
    displayTitle('35px arial', 'white', 'center', 'sfx : Sound Effects & Sound Fx', creditLayer.width / 2, 110, creditCtx);
    displayTitle('35px arial', 'white', 'center', 'Backsound :  Super Mario Galaxy', creditLayer.width / 2, 150, creditCtx);

    customRectStroke(0, 0, 200 + 15, 0 + 15, 150 + 15, 50 + 15, 0, 50 + 15, 'yellow', creditCtx);
    customRectangle(0, 0, 200, 0, 150, 50, 0, 50, 'red', creditCtx);
    displayTitle('35px impact', 'white', 'center', 'Back', 70, 40, creditCtx); 
    creditLayer.addEventListener('click', function(e){
        var mouseX = e.clientX - menuLayer.getBoundingClientRect().left;
        var mouseY = e.clientY - menuLayer.getBoundingClientRect().top;
        
        if(mouseX >= 0 && mouseX <= 200 && mouseY >= 0 && mouseY <= 50){
            console.log("Fungsi Untuk Berpindah ke Layer Menu Seharusnya Sudah Berhasil");
            setTimeout(() => {
                creditLayer.style.display = 'none';
                menuLayer.style.display = 'block';
            }, 1000);
        }
    })
}