var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext("2d");
//menentukan warna 1 dan 2
var color1 = "lavender";
var color2 = "#FFFACD";

//menentukan banyaknya garis yang digambar
var numberOfSrtipes = 50;

//menentukan tebalnya pola garis yang digambar
var thickness = 640 / numberOfSrtipes;

//mengatur ketebalan garis pada pola
ctx.lineWidth = thickness;

//menggambarkan garis sebanyak numberOfstring (50)
for (var i=0; i < numberOfSrtipes * 2; i++){
    //mulai menggambar
    ctx.beginPath();
    
    //mengatur posisi awal garis yang akan digambar
    ctx.strokeStyle = i % 2 ? color1:color2;

    //mengatur posisi awal garis yang akan digambar
    ctx.moveTo( 0, i * thickness + thickness / 2);

   // mengatur posisi ke dua (terakhir) yang garis akan digambar
   ctx.lineTo(640, i * thickness + thickness / 2);

   //menggambar garisnya
   ctx.stroke();
}
ctx.lineWidth=1;

//menggambar titik koordinat (10,10) dengan ukuran 1x1 px
//ctx.fillRect(10,10,1,1);

//ctx.beginPath();//mulai membuat garis
//ctx.moveTo(30, 10);//untuk menentukan titik awal
//ctx.lineTo(80, 50);//menentukan titik akhir
//ctx.stroke();

var lineGrandient= ctx.createLinearGradient(10,150,60,150);
lineGrandient.addColorStop(0,'black');
lineGrandient.addColorStop(1,'white');
ctx.fillStyle=lineGrandient;
ctx.fillRect(10,10,70,70);

ctx.fillStyle= '#0000FF'
ctx.strokeRect(100, 10, 70, 70);
ctx.fillRect(180, 10, 50, 50);
ctx.clearRect(190,20,20,20);
//ctx.arc(x,y,r, sudutAwal, sudutAkhir, arah);

ctx.beginPath();
ctx.arc(50,140,30,0,50);
ctx.stroke();
ctx.closePath();

//membuat garis luar menjadi warna jingga
ctx.strokeStyle='rgb(255,165,0)';

ctx.beginPath();
ctx.moveTo(130,130);
ctx.lineTo(90,170);
ctx.lineTo(170,170);
ctx.closePath();
ctx.stroke();
//ctx.fill();

//menentukan warna dari radial gradient yang akan tampil (2 warna berbeda)
var radGradient= ctx.createRadialGradient(95 + 25, 150 - 25,2,95+25,150-25,25);
radGradient .addColorStop(0,'#A7D30C');
radGradient .addColorStop(1,'#019F62');
//mengatur agar tampilan gambar berikutya menggunakan style radGradient
ctx.fillStyle=radGradient;


//menggambarkan bentuk persegi 
ctx.fillRect(95,100,50,50)