const prompt = require('prompt-sync')();

let nilai = parseInt(prompt("Silahkan Masukkan nilai untuk di cek apakah nilai ganjil atau genap: "));

if(nilai % 2 === 0) {
    console.log(`Nilai ${nilai} Merupakan Bilangan Genap.`);
} else {
    console.log(`Nilai ${nilai} Merupakan Bilangan Ganjil.`);
}