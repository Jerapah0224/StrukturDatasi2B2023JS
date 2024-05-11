const readLineSync = require('readline-sync');

let panjang = parseFloat(readLineSync.question("Masukkan panjang persegi panjang: "));
let lebar = parseFloat(readLineSync.question("Masukkan lebar persegi panjang: "));

let luas = panjang * lebar ;
console.log("Luas persegi panjang adalah: " + luas.toFixed(2));