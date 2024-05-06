const readLineSync = require('readline-sync');

let jariJari = parseFloat(readLineSync.question('Masukkan Jari jari tabung: '));
let tinggi = parseFloat(readLineSync.question('Masukkan tinggi tabung: '));
let luas = 2 * 3.14159 * jariJari * (jariJari + tinggi);
console.log("Luas permukaan tabung adalah: " + luas.toFixed(2));