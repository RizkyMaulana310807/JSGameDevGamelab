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