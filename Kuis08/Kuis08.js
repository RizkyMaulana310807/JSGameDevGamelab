//mengambil canvas
var canvas = document.getElementById("canvas_transform");
//mengambil context dari element
var ctx = canvas.getContext("2d");
//menyimpan state #1
ctx.save();
//Menggambar persegi berwarna hitam(default) dengan tebal dan lebar 100px
ctx.fillRect(0, 0, 100, 100);
//menggeser posisi canvas dengan x dan y masing masing 50px
ctx.translate(50, 50);
//menyimpan state #2
ctx.save();
//menggambar persegi warna biru dengan lebar dan tinggi 50px pada koordinat x dan y = 0
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 100, 100);
//menggeser posisi canvas dengan x dan y masing masing 50px
ctx.translate(50, 50);
///menggambar oesegi berwarna pink dengan lebar dan tinggi 50px pada koordinat x dan y = 0
ctx.fillStyle = 'pink';
ctx.fillRect(0, 0, 50, 50);
//mengembalikan canvas ke state 2#
ctx.restore();
//membuat persegi berwarna oranye atau jingga dengan lebar dan tinggi 50px pada posisi x dan y  0
ctx.rotate((Math.PI / 180) *  45);
ctx.fillStyle = 'orange';
ctx.fillRect(0, 0, 50, 50);
//mengembalikan state #1 
ctx.restore()
//menggambar persegi berwarna kuning dengan lebar dan tinggi 50px pada koordinat x dan y = 0

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, 50, 50);

//membuat persegi dengan ukuran 10 x 10 px lalu mengatur skalanya 10, 1 hingga menjadi persegi panjang
ctx.fillStyle = 'brown';
ctx.save();
ctx.translate(300, 20);
ctx.scale(10, 1);
ctx.translate(-300, -20);
ctx.fillRect(300, 20, 10, 10);
ctx.restore();

//membuat teks 'GAMELAB.ID' lalu mengatur skalanya -1, 1 agar terlihat secara horizontal
ctx.save()
ctx.translate(450, 10);
ctx.scale(-1, 1);
ctx.font = '30px Arial';
ctx.translate(-450, -10);
ctx.fillText('GAMELAB.ID', 450, 230);
ctx.restore();
//save
ctx.save();
//menggeser canvas ke x 200 dan y 240
ctx.translate(200, 240);
//membuat garis putus putus
ctx.setLineDash([4]);

ctx.save();
ctx.fillStyle = 'pink';
ctx.setTransform(1, 1, 0, 1, 10, 0);
ctx.fillRect(190, 90, 50, 50);
ctx.restore();

ctx.save()
ctx.fillStyle = 'cyan';
ctx.setTransform(1, 1, 0, 1, 160, 50);
ctx.fillRect(190, 90, 50, 50);
ctx.restore();

ctx.save();
ctx.strokeStyle = 'black';
ctx.strokeRect(50, 90, 100, 50);
ctx.restore()

ctx.restore()













var width = 100;
var height = 100;

//membuat fungsi atau method untuk membuat canvas agar kodenya menjadi sedikit
function createCanvas(){
    var newCanvas = document.createElement("canvas_compositing");
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