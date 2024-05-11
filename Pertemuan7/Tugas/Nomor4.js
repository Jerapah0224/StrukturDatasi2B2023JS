const readlineSync = require('readline-sync');

let angka1 = parseFloat(readlineSync.question('masukkan angka : '));
const angka2 = "10";

console.log(angka1 == angka2);
console.log(angka1 != angka2);