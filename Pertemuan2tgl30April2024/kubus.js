const readLineSync = require('readline-sync');

let sisi = parseFloat(readLineSync.question('Masukkan sisi kubus: '));

let luasPermukaan = 6 * (sisi * sisi);

console.log("Luas Permukaan Kubus: " + luasPermukaan);