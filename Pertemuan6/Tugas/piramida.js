const readLineSync = require('readline-sync');

let jumlahSisiAlas = parseFloat(readLineSync.question('Masukkan jumlah sisi alas: '));
let panjangSisiAlas = parseFloat(readLineSync.question('Masukkan panjang sisi alas: '));
let tinggiSegitigaTegak = parseFloat(readLineSync.question('Masukkan tinggi segitiga tegak: '));

let luasAlas = Math.sqrt(3) * panjangSisiAlas * panjangSisiAlas;
let volume = luasAlas * tinggiSegitigaTegak;

console.log("Volume ruang bangun dengan alas segi-"+ jumlahSisiAlas + " dan sisi-sisi tegak berbentuk segitiga adalah: " + volume.toFixed(2));