const readLineSync = require('readline-sync');
let alas = parseFloat(readLineSync.question('Masukkan alas prisma: '));
let tinggi = parseFloat(readLineSync.question('Masukkan tinggi prisma: '));
let kelilingAlas = parseFloat(readLineSync.question('Masukkan keliling alas prisma: '));
let luasSisiTegak = tinggi * kelilingAlas
let luas = 2 * alas + luasSisiTegak;
console.log("Luas permukaan prisma adalah: " + luas.toFixed(2));