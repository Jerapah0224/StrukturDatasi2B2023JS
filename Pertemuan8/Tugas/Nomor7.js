const prompt = require('prompt-sync')();

let nilai = parseInt(prompt("Silahkan Masukkan Nilai Anda: "));

if (nilai >= 85 ){
    console.log("Selamat Anda mendapatkan Grade: A ");
} else if(nilai >= 70){
    console.log("Selamat Anda mendapatkan Grade: B ");
} else if(nilai >= 55){
    console.log("Selamat Anda mendapatkan Grade: C ");
} else if(nilai >= 40){
    console.log("Selamat Anda mendapatkan Grade: D ");
} else {
    console.log("Selamat Anda mendapatkan Grade: E ");
}