const readlineSync = require('readline-sync');

let angka = parseFloat(readlineSync.question('masukkan angka: '));

if (angka % 2 === 0) {
    console.log(angka + " adalah bilangan genap.");
} else {
    console.log(angka + " adalah bilangan ganjil.");
}