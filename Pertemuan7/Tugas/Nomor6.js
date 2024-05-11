const readlineSync = require('readline-sync');

let totalBelanja = parseFloat(readlineSync.question('masukkan total belanja : '));
totalBelanja += 5000;
totalBelanja -= 2000;

const pajak = 0.5 * totalBelanja;

totalBelanja += pajak;

console.log("Total belanja akhir: ", totalBelanja);