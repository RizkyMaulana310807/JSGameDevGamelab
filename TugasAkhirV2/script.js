// Layer BG
var BGLayer = document.getElementById("BG_layer")
var ctxBG = BGLayer.getContext("2d");
var BG_space = new Image();
BG_space.src = "images/Starfield-Stars-Universe-FlyBy-Motion-Background-Video-Loop-Sample2-1.jpg";
var posXImage = 0;
var posYImage = 0;
var widthImage;
var heightImage;
var veloXImage = 1;
BG_space.onload = function(){
    widthImage = BG_space.width;
    heightImage = BG_space.height;
    drawAll();
};
function drawAll(){
    drawPanorama();
    menu_display();
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
var menuLayer = document.getElementById("menu_layer");
var ctxMenu = menuLayer.getContext('2d');
function drawRectangle(x, y, width, height, color){
    ctxMenu.fillStyle = color;
    ctxMenu.fillRect(x, y, width, height);
    console.log("Rectangle x : " + x);
    console.log("Rectangle y : " + y);
    console.log("Rectangle width : " + width);
    console.log("Rectangle height : " + height);
};
function displayTitle(font, color, align, text, x, y){
    ctxMenu.font = font;
    ctxMenu.fillStyle = color;
    ctxMenu.textAlign = align;
    ctxMenu.fillText(text, x, y);
}
function displayStrokeText(font, color, align, text, x, y, lineWidth){
    ctxMenu.font = font;
    ctxMenu.textAlign = align;
    ctxMenu.strokeStyle = color;
    ctxMenu.lineWidth = lineWidth;
    ctxMenu.strokeText(text, x, y); 
}
function timeOutMenu(){
    function showMenu1(){
        drawRectangle((menuLayer.width - 200) / 2, (menuLayer.height - 75) / 2, 200, 75, 'red');
    }
    function showMenu2(){
        displayStrokeText('71px fantasy', 'yellow', 'center', 'Mulai', menuLayer.width / 2 + 5, menuLayer.height / 2 + 25, 1);
    }
    function showMenu3(){
        displayStrokeText('90px Impact', 'yellow', 'center', 'Space', menuLayer.width /  2 - 30, menuLayer.height / 4 - 30, 1);    
    }
    function showMenu4(){
        displayStrokeText('70px Impact', 'yellow', 'center', 'Shooter', menuLayer.width / 2 + 65, menuLayer.height / 4 + 30, 1);
    }
    function showMenu5(){
        displayTitle('70px fantasy', 'white', 'center', 'Mulai', menuLayer.width / 2 , menuLayer.height / 2 + 17);
    }
    function showMenu6(){
        displayTitle('90px Impact', 'white', 'center', 'Space', menuLayer.width /  2 - 50, menuLayer.height / 4 - 50);
    }
    function showMenu7(){
        displayTitle('70px Impact', 'white', 'center', 'Shooter', menuLayer.width / 2 + 50, menuLayer.height / 4 + 10);
    }
    setTimeout(showMenu1, 1000);
    setTimeout(showMenu2, 1100);
    setTimeout(showMenu3, 1200);
    setTimeout(showMenu4, 1300);
    setTimeout(showMenu5, 1400);
    setTimeout(showMenu6, 1500);
    setTimeout(showMenu7, 1600);
}
function menu_display(){
    timeOutMenu();
    menuLayer.addEventListener('click', function(e){
        var mouseX = e.clientX - menuLayer.getBoundingClientRect().left;
        var mouseY = e.clientY - menuLayer.getBoundingClientRect().top;
        
        if(mouseX >= 412 && mouseX <= 412 + 200 && mouseY >= 346.5 && mouseY <= 346.5 + 75){
            console.log("Fungsi Untuk Berpindah ke Layer Gameplay Seharusnya Sudah Berhasil");
        }
    });
};
