const prompt = require('prompt-sync')();

let n = parseInt(prompt("Masukkan sebuah angka: "));
for (let i = 0; i < n; i++) {
    console.log(`Perulangan ke- ${i}`);
}