const prompt = require('prompt-sync')();

let n= parseInt(prompt("Masukkan sebuah angka: "));
let i = 0;
while(i < n){
    console.log(`Perulangan ke ${i}`);
    i++
}
