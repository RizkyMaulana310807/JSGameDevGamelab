var width = 100;
var height = 100;

//membuat fungsi atau method untuk membuat canvas agar kodenya menjadi sedikit
var createCanvas = function(){
    var newCanvas = document.createElement("canvas");
    newCanvas.width = width * 1.2;
    newCanvas.height = height * 1.2;
    newCanvas.style.border = "1px solid black";
    newCanvas.style.margin = "60px";
    return newCanvas;
};

var canvasObjCirc = createCanvas();
var ctxObjCirc = canvasObjCirc.getContext("2d");
ctxObjCirc.fillStyle = "orange";
ctxObjCirc.translate((widtht * 1.2 - width) / 2, (height * 1.2 - height) / 2);
ctxObjCirc.beginPath();
ctxObjCirc.arc(width/2, height/2, Math.PI*2, 0, false);
ctxObjCirc.fill();

//menggambar 1 segitiga hijau yang nantinya bisa di pakai berulang kali
var canvasObjTria = createCanvas();
var ctxObjTria = canvasObjCirc.getContext("2d");
ctxObjTria.translate((width * 1.2)/2, (height * 1.2)/2);
ctxObjTria.beginPath();
ctxObjTria.moveTo(0, 0);
ctxObjTria.lineTo(width, 0);
ctxObjTria.lineTo(width/2, height);
ctxObjTria.closePath();
ctxObjTria.fill();

//membuat tabel
 var dl = document.createElement("dl");
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