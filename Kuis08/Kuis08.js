//mengambil canvas
var canvas = document.getElementById("canvas_transform");
//mengambil context dari element
var ctxTransform = canvas.getContext("2d");
//menyimpan state #1
ctxTransform.save();
//Menggambar persegi berwarna hitam(default) dengan tebal dan lebar 100px
ctxTransform.fillRect(0, 0, 100, 100);
//menggeser posisi canvas dengan x dan y masing masing 50px
ctxTransform.translate(50, 50);
//menyimpan state #2
ctxTransform.save();
//menggambar persegi warna biru dengan lebar dan tinggi 50px pada koordinat x dan y = 0
ctxTransform.fillStyle = 'blue';
ctxTransform.fillRect(0, 0, 100, 100);
//menggeser posisi canvas dengan x dan y masing masing 50px
ctxTransform.translate(50, 50);
///menggambar oesegi berwarna pink dengan lebar dan tinggi 50px pada koordinat x dan y = 0
ctxTransform.fillStyle = 'pink';
ctxTransform.fillRect(0, 0, 50, 50);
//mengembalikan canvas ke state 2#
ctxTransform.restore();
//membuat persegi berwarna oranye atau jingga dengan lebar dan tinggi 50px pada posisi x dan y  0
ctxTransform.rotate((Math.PI / 180) *  45);
ctxTransform.fillStyle = 'orange';
ctxTransform.fillRect(0, 0, 50, 50);
//mengembalikan state #1 
ctxTransform.restore()
//menggambar persegi berwarna kuning dengan lebar dan tinggi 50px pada koordinat x dan y = 0

ctxTransform.fillStyle = 'yellow';
ctxTransform.fillRect(0, 0, 50, 50);

//membuat persegi dengan ukuran 10 x 10 px lalu mengatur skalanya 10, 1 hingga menjadi persegi panjang
ctxTransform.fillStyle = 'brown';
ctxTransform.save();
ctxTransform.translate(300, 20);
ctxTransform.scale(10, 1);
ctxTransform.translate(-300, -20);
ctxTransform.fillRect(300, 20, 10, 10);
ctxTransform.restore();

//membuat teks 'GAMELAB.ID' lalu mengatur skalanya -1, 1 agar terlihat secara horizontal
ctxTransform.save()
ctxTransform.translate(450, 10);
ctxTransform.scale(-1, 1);
ctxTransform.font = '30px Arial';
ctxTransform.translate(-450, -10);
ctxTransform.fillText('GAMELAB.ID', 450, 230);
ctxTransform.restore();
//save
ctxTransform.save();
//menggeser canvas ke x 200 dan y 240
ctxTransform.translate(200, 240);
//membuat garis putus putus
ctxTransform.setLineDash([4]);

ctxTransform.save();
ctxTransform.fillStyle = 'pink';
ctxTransform.setTransform(1, 1, 0, 1, 10, 0);
ctxTransform.fillRect(190, 90, 50, 50);
ctxTransform.restore();

ctxTransform.save()
ctxTransform.fillStyle = 'cyan';
ctxTransform.setTransform(1, 1, 0, 1, 160, 50);
ctxTransform.fillRect(190, 90, 50, 50);
ctxTransform.restore();

ctxTransform.save();
ctxTransform.strokeStyle = 'black';
ctxTransform.strokeRect(50, 90, 100, 50);
ctxTransform.restore()

ctxTransform.restore()













var width = 100;
var height = 100;

//membuat fungsi atau method untuk membuat canvas agar kodenya menjadi sedikit
function createCanvas(){
    var newCanvas = document.createElement("canvas");
    newCanvas.width = width * 1.2;
    newCanvas.height = height * 1.2;
    newCanvas.style.border = "1px solid #000";
    newCanvas.style.margin = "60px";
    return newCanvas;
}

var canvasObjCirc = createCanvas();
var ctxObjCirc = canvasObjCirc.getContext('2d');
ctxObjCirc.fillStyle = "orange";
ctxObjCirc.translate((width*1.2-width)/2, (height*1.2-height)/2);
ctxObjCirc.beginPath();
ctxObjCirc.arc(width/2, height/2, Math.PI*15, 0.1, false);
ctxObjCirc.fill();

//menggambar 1 segitiga hijau yang nantinya bisa di pakai berulang kali
var canvasObjTria = createCanvas();
var ctxObjTria = canvasObjTria.getContext("2d");
ctxObjTria.fillStyle = "green";
ctxObjTria.translate((width * 1.2 - width)/2, (height * 1.2 - height)/2);
ctxObjTria.beginPath();
ctxObjTria.moveTo(0, 0);
ctxObjTria.lineTo(width, 0);
ctxObjTria.lineTo(width/2, height);
ctxObjTria.closePath();
ctxObjTria.fill();

//membuat tabel
 var dl = document.createElement("dl");
 document.body.appendChild(dl);
 var dt1 = document.createElement("dt");
 dl.appendChild(dt1);
 //membuat canvas baru yang langsung terisi lingkaran jingga
 var canvasCirc = createCanvas();
 var ctx = canvasCirc.getContext('2d');
 ctx.drawImage(canvasObjCirc, 0, 0);
 dt1.appendChild(canvasCirc);

 //membuat canvas baru yang berisi segitiga hijau
 var canvasTria = createCanvas();
 var ctx = canvasTria.getContext('2d');
 ctx.drawImage(canvasObjTria, 0, 0);
 dt1.appendChild(canvasTria);

 var canvasSourceOver = createCanvas();
 var ctx = canvasSourceOver.getContext('2d');
 ctx.drawImage(canvasObjCirc, 0, 0);
 ctx.globalCompositeOperation = 'source-over';
 ctx.drawImage(canvasObjTria, 0, 0);
 dt1.appendChild(canvasSourceOver);

 var dt2 = document.createElement("dt");
 dl.appendChild(dt2);

 var canvasSourceIn = createCanvas();
 var ctx = canvasSourceIn.getContext('2d');
 ctx.drawImage(canvasObjCirc, 0, 0);
 ctx.globalCompositeOperation ='source-in';
 ctx.drawImage(canvasObjTria, 0, 0);
 dt2.appendChild(canvasSourceIn);

 var canvasSourceOut = createCanvas();
 var ctx = canvasSourceOut.getContext('2d');
 ctx.drawImage(canvasObjCirc, 0, 0);
 ctx.globalCompositeOperation ='source-out';
 ctx.drawImage(canvasObjTria, 0, 0);
 dt2.appendChild(canvasSourceOut);
 
 var canvasSourceAtop = createCanvas();
 var ctx = canvasSourceAtop.getContext('2d');
 ctx.drawImage(canvasObjCirc, 0, 0);
 ctx.globalCompositeOperation = 'source-atop';
 ctx.drawImage(canvasObjTria, 0, 0);
 dt2.appendChild(canvasSourceAtop);



















 var canvas = document.getElementById("canvas_clipping");
 var ctx = canvas.getContext('2d');
var radRect = ctx.createLinearGradient(0, -350, 0, 350);
radRect.addColorStop(0.5, '#232256');
radRect.addColorStop(1, '#143778');
ctx.fillStyle = radRect;
ctx.fillRect(0, 0, canvas.width, canvas.height);

var radTriangle = ctx.createLinearGradient(0, 255, 0, 350);
radTriangle.addColorStop(0.5, '#232556');
radTriangle.addColorStop(1, '#ffcf75');
ctx.fillStyle = radTriangle;

ctx.beginPath();
ctx.moveTo(canvas.width / 1, 255);
ctx.lineTo(canvas.width / 1, -255);
ctx.lineTo(0, 480);
ctx.closePath();
ctx.fill();

ctx.clip();

for(var j = 1; j < 100; j++){
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(canvas.width - Math.floor(Math.random() * canvas.width), canvas.height - Math.floor(Math.random() * canvas.height));

    drawStar(ctx, Math.floor(Math.random() * 6) + 2);
    ctx.restore();
}

function drawStar(ctx, r){
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(r, 0);
    for(var i = 0; i < 9; i++){
        ctx.rotate(Math.PI / 5);
        if(i % 2 === 0){
            ctx.lineTo((r / 0.525731) * 0.200811, 0);
        } else{
            ctx.lineTo(r, 0);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}






var canvas = document.getElementById("canvas_baru");
var ctxBaru = canvas.getContext("2d");

ctxBaru.rotate((Math.PI / 180) *  45);
ctxBaru.fillStyle = "orange";
ctxBaru.fillRect(450, 0, 100, 100);

ctxBaru.setTransform(1, 0, 0, 1, 0, 0);


ctxBaru.fillStyle = "white";
ctxBaru.fillRect(240, 280, 155, 100);


ctxBaru.fillStyle = "orange";
ctxBaru.beginPath();
ctxBaru.moveTo(245, 385);
ctxBaru.lineTo(270, 275);
ctxBaru.lineTo(270, 410);
ctxBaru.closePath();
ctxBaru.fill();


ctxBaru.beginPath();
ctxBaru.moveTo(365, 380);
ctxBaru.lineTo(360, 275);
ctxBaru.lineTo(390, 387);
ctxBaru.closePath();
ctxBaru.fill();