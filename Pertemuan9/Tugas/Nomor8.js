const prompt = require('prompt-sync')();

while (true) {
    console.log(" ");
    console.log("Masukkan nilai 0 .Untuk menghentikan program")
    let panjang = parseFloat(prompt('Masukkan panjang balok: '));
    let lebar = parseFloat(prompt('Masukkan lebar balok: '));
    let tinggi = parseFloat(prompt('Masukkan tinggi balok: '));

    if (panjang === 0 || lebar === 0 || tinggi === 0) {
        console.log("========== Program telah selesai ==========");
        console.log("         Sistem Informasi 2 B 2023        ");
        console.log(" ");
        break;
    }

    let volume = panjang * lebar * tinggi;
    let luasPermukaan = 2 * (panjang * lebar + lebar * tinggi + tinggi * panjang);

    console.log(" ");
    console.log(`Volume balok: ${volume}`);
    console.log(`Luas permukaan balok: ${luasPermukaan}`);
}
