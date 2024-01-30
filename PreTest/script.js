console.log("Hello Gamelab");
function animasiGamelab(targetTeks, speed){
    let index = 0;

    let header = document.getElementById('header');
    function cetak(){
        header.innerHTML = "";
        header.innerHTML = targetTeks.substring(0, index)
        console.clear();
        console.log(targetTeks.substring(0, index));
        index++;
        if(index <= targetTeks.length){
            setTimeout(cetak, speed);
        }
    }
    cetak();
}
/* function animasiNama(teksTarget, speed){
    let nilaiAwal = 0;
    function printTeks(){
        console.clear();
        console.log(teksTarget.substring(0, nilaiAwal));
        nilaiAwal++;
        if(nilaiAwal <= teksTarget.length){
            setTimeout(printTeks, speed);
        }
    }
    printTeks();
} */
animasiGamelab("Hello Gamelab!, nama saya Rizky Maulana", 100);


let buttonElement = document.getElementById('buttonTeks');
buttonElement.addEventListener('click', () =>{
    let header = document.getElementById('Header');
    let teksElement = document.getElementById('inputUser');
    let inputValue = teksElement.value;
    animasiGamelab(inputValue, 100)
})
