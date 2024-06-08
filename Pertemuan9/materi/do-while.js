const prompt = require('prompt-sync')();

let n= parseInt(prompt("Masukkan sebuah angka: "));
let i = 0;
do  {
    console.log(`Perulangan ke ${i}`);
    i++;
} while(i < n);