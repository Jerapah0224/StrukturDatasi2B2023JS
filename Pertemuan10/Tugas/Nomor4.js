const prompt = require('prompt-sync')();

//menu utama
console.log("Menu Utama Menghitung Volume Bangun Ruang: ");
console.log("1. Kubus ");
console.log("2. Balok ");
console.log("3. Keluar ");
let pilih = parseInt(prompt("Silahkan pilih jenis bangun ruang (1-3): "));

//kubus
function volumeKubus(sisi){
    return Math.pow(sisi, 3);
};
//Balok
function volumeBalok(panjang, lebar, tinggi){
    return panjang * lebar * tinggi;
};

switch(pilih){
    case 1:
        //menghitung kubus
        let panjangSisi = parseFloat(prompt("Masukkan panjang sisi kubus: "));
        let menghitung = volumeKubus(panjangSisi);
        console.log(`Volume Kubus adalah ${menghitung}`);
        break;
    case 2:
        //menghitung balok
        let panjangBalok = parseFloat(prompt("Masukkan panjang Balok: "));
        let lebarBalok = parseFloat(prompt("Masukkan lebar Balok: "));
        let tinggiBalok = parseFloat(prompt("Masukkan tinggi Balok: "));
        let hitung = volumeBalok(panjangBalok, lebarBalok, tinggiBalok);
        console.log(`Volume Balok adalah ${hitung}`);
        break;
    default:
        console.log('Silahkan ulangi program');
        break;
};