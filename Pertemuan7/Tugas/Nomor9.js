const readLineSync = require('readline-sync');
let nama = readLineSync.question("Masukkan Nama Anda: ");
let hasil;

if (nama !== "Muhammad Yassir") {
    hasil = `Mohon maaf ${nama}, Anda belum terdaftar. Ayoo Daftar sekarang ke Universitas Labuhanbatu, Pilih prodi Sistem Informasi yaaaa`;
} else {
    hasil = "Anda Sekarang adalah Mahasiswa Sistem Informasi 23 B di Universitas Labuhanbatu.";
};
console.log("");
console.log("");
console.log(hasil);

