const prompt = require('prompt-sync')();

// menggunakan prosedur untuk menghitung volume bangun balok
function hitungVolumeBalok(p, l, t){
    return p * l * t;
};

//meminta input ke user
let panjang = parseFloat(prompt("Masukkan Panjang balok: "));
let lebar = parseFloat(prompt("Masukkan Lebar balok: "));
let tinggi = parseFloat(prompt("Masukkan tinggi balok: "));

//
let volume = hitungVolumeBalok(panjang, lebar, tinggi);

//menampilkan output
console.log(`Volume balok adalah ${volume}`);