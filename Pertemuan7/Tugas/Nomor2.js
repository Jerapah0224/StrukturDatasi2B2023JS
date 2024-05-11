const readLineSync = require('readline-sync');

let kehadiran = parseFloat(readLineSync.question("Masukkan Nilai Kehadiran: "));
let tugas = parseFloat(readLineSync.question("Masukkan Nilai Tugas: "));
let uts = parseFloat(readLineSync.question("Masukkan Nilai UTS: "));
let uas = parseFloat(readLineSync.question("Masukkan Nilai UAS: "));

let nilaiSemester = (kehadiran * 0.1) + (tugas * 0.3) + (uts * 0.3) + (uas * 0.3);
let predikat = " ";

if (nilaiSemester >= 80) {
    predikat = "A";
} else if (nilaiSemester >= 70) {
    predikat = "B";
} else if (nilaiSemester >= 60) {
    predikat = "C";
} else if (nilaiSemester >= 50) {
    predikat = "D";
} else {
    predikat = "E";
};

console.log("Anda mendapatkan nilai Semester : " + nilaiSemester + " Selamat Yaaa");
console.log("Anda mendapatkan Predikat : " + predikat);