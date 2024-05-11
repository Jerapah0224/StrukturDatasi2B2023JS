const readLineSync = require('readline-sync');

let nilai1 = parseFloat(readLineSync.question("Masukkan Nilai Pertama: "));
let operasi = readLineSync.question("Masukan Operasi (+, -, *, /, %): ");
let nilai2 = parseFloat(readLineSync.question("Masukkan Nilai Kedua: "));

let hasil = " ";
switch(operasi) {
    case '+':
        hasil = nilai1 + nilai2;
        break;
    case '-':
        hasil = nilai1 - nilai2;
        break;
    case '/':
        hasil = nilai1 / nilai2;
        break;
    case '*':
        hasil = nilai1 * nilai2;
        break;
    case '%':
        hasil = nilai1 % nilai2;
        break;
    default:
        hasil = "Silahkan Ulangi program";
};

console.log("Hasil operasi Anda adalah: " + hasil);
