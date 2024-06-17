const prompt = require('prompt-sync')();
// Menggunakan function rekursif
  function hitungLuasPermukaanKubus(sisi){
    if (sisi <= 0) {
      return 0;
    } else {
      return 6 * (sisi * sisi);
    }
  };
  function hitungVolumeKubus(sisi){
    if (sisi <= 0) {
      return 0;
    } else {
      return sisi * sisi * sisi;
    };
  };

// Menggunakan function Non rekursif (NR)
  function hitungLuasPermukaanKubusNR(sisi){
    return 6 * (sisi * sisi);
  };
  function hitungVolumeKubusNR(sisi){
    return sisi * sisi * sisi;
  };

// menggunakan variabel let dan prompt untuk meminta input ke user
let panjangSisi = parseFloat(prompt("Masukkan panjang sisi kubus: "));
// memanggil function prosedur melalui variabel let
let volume = hitungVolumeKubusNR(panjangSisi);
let luasPermukaan = hitungLuasPermukaanKubusNR(panjangSisi);
//menampilkan output kepada user
console.log(`===== Hasil Perhitungan =====`);
console.log(`Volume Kubus adalah ${volume}`);
console.log(`Luas Permukaan Kubus adalah ${luasPermukaan}`);
