let nama = " ";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Selamat datang di Program Sapaan! ");
rl.question("Silahkan Masukkan nama Anda: ", (input) => {
    Nama = input;
    console.log("Halo, " + Nama + "! Selamat datang diprogram sederhana ini.");
    console.log("Terima kasih telah menggunakan program ini.");
    rl.close();
});