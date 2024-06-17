const prompt = require('prompt-sync')();

// menggunakan prosedur untuk menghitung volume bangun kubus
function hitungVolumeKubus(sisi){
    return sisi * sisi * sisi;
};

//menggunakan prosedur untuk menghitung luas permukaan kubus
function hitungLuasPermukaanKubus(sisi){
    return 6 * (sisi * sisi);
};

// menggunakan variabel let dan prompt untuk meminta input ke user
let panjangSisi = parseFloat(prompt("Masukkan panjang sisi kubus: "));

// memanggil function prosedur melalui variabel let
let volume = hitungVolumeKubus(panjangSisi);
let luasPermukaan = hitungLuasPermukaanKubus(panjangSisi);

//menampilkan output kepada user
console.log(`===== Hasil Perhitungan =====`);
console.log(`Volume Kubus adalah ${volume}`);
console.log(`Luas Permukaan Kubus adalah ${luasPermukaan}`);



