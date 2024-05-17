const prompt = require('prompt-sync')();

console.log("SELAMAT DATANG DI PROGRAM UNTUK MENETUKAN APAKAH TAHUN KABISAT ATAU TIDAK");
let tahun = parseInt(prompt("Silahkan Masukkan Tahun: "));

if(tahun % 4 === 0){
    if(tahun % 100 === 0){
        if(tahun % 400 === 0){
            console.log(` ${tahun} merupakan Tahun Kabisat.`);
        } else{
            console.log(` ${tahun} merupakan bukan tahun kabisat.`);
        }
    } else{
        console.log(` ${tahun} merupakan Tahun Kabisat.`);
    }
} else {
    console.log(` ${tahun} merupakan bukan tahun kabisat.`);
}