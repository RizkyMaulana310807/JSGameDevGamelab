// Rizky Maulana X - Oracle
// console.log("Hello, World");
//Kawasan
var kriteria_kawasan;
var kawasan_banjir;
var kawasan_longsor;
var kawasan_industri;
//luasan
// var kriteria_luasan;
var luas_tanah;
var luas_bangunan;
//fasilitas
// var fasilitas;
var kolam_renang;
var lahan_parkir;
var lahan_kebun;

// Untuk Semua
// 0 = Tidak / Tidak ada
// 1 = Ya / Ada

kawasan_banjir = 0;
kawasan_longsor = 0;
kawasan_industri = 0;

luas_tanah = 800;
luas_bangunan = 400;

kolam_renang = 1;
lahan_parkir = 1;
lahan_kebun = 1;

kriteria_kawasan = 1; // Untuk menjakankan pengecekan pada kriteria kawasan
switch(kriteria_kawasan){
    case 1:
        console.log("Rumah di temukan dengan ...")
        console.log("\nKriteria kawasan : ")
        switch(kawasan_banjir){
            case 0:
                console.log("Tidak terdapat area rawan banjir");
                break;
            default:
                console.log("Terdapat area rawan banjir");
                break;
        }
        switch(kawasan_longsor){
            case 0:
                console.log("Tidak terdapat area rawan longsor");
                break;
            default:
                console.log("Terdapat area rawan longsor");
                break;
        }
        switch(kawasan_industri){
            case 0:
                console.log("Tidak terdapat area industri");
                break;
            default:
                console.log("Terdapat area industri");
                break;
        }
        console.log("\nLuas :")
        if(luas_tanah >= 800){
            console.log("Tanah memiliki luas kurang lebih 800+");
        } else if(luas_tanah <= 799){
            console.log("Tanah memiliki luas kurang dari 800");
        }
        if(luas_bangunan >= 400){
            console.log("Bangunan memiliki luas 400+");
        } else if(luas_bangunan <= 399){
            console.log("Bangunan memiliki luas kurang dari 399");
        }
        console.log("\nFasilitas :")
        switch(kolam_renang){
            case 0:
                console.log("Tidak memiliki kolam renang");
                break;
            default:
                console.log("Memiliki fasilitas kolam renang");
                break;
        }
        switch(lahan_parkir){
            case 0:
                console.log("Tidak memiliki lahan parkir");
                break;
            default:
                console.log("Memiliki lahan parkir");
                break;
        }
        switch(lahan_kebun){
            case 0:
                console.log("Tidak memiliki lahan kebun");
                break;
            default:
                console.log("Memiliki lahan kebun");
                break;
        }
        break;
    default:
        console.log("Eror saat mencari...");
        break;
}

//Kode ini tidak menimbulkan eror setelah di coba (Des 29 23 12:46)