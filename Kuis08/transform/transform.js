//mengambil canvas
var canvas = document.getElementById("GL_Canvas");
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