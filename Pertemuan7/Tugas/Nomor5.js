const readlineSync = require('readline-sync');

let nama = parseFloat(readlineSync.question('masukkan nama : '));
let usia = parseFloat(readlineSync.question('masukkan usia : '));
let hasilPenjumlahan = 5 + 5;
let luasPersegiPanjang = 5 * 5;

nama = "Hadyan";
usia = 20;
hasilPenjumlahan += 5;

console.log("Nama: ", nama);
console.log("Usia: ", usia);
console.log("Hasil penjumlahan: ", hasilPenjumlahan);
console.log("Luas persegi panjang: ", luasPersegiPanjang);