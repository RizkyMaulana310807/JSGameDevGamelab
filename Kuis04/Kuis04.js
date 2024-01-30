var text = "";
for (var x = 0; x < 5; x++) {
    //spasi
    for (var i = 0; i < 5 - x - 1; i++) {
        text += " ";
        // console.log("i = " + i);
    }
    //bintang
    for (var y = 0; y <= x; y++) {
        text += "*";
        // console.log("y = " + y);
    }
    // console.log("x = " + x);
    //baris baru
    text += "\n";
}
console.log(text);
