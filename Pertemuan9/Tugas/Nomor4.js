const prompt = require('prompt-sync')();

for (let i = 1; i <= 10; i++) {
    const sisi = parseInt(prompt(`Masukkan panjang sisi persegi panjang ke-${i}:`));
    const luas = sisi * sisi;
    const keliling = 4 * sisi;

    console.log(`Persegi ke-${i}:`);
    console.log(`Panjang sisi: ${sisi}`);
    console.log(`Luas: ${luas}`);
    console.log(`Keliling: ${keliling}`);
    console.log();
}; 

console.log("========== Program telah selesai ==========");
console.log("         Sistem Informasi 2 B 2023        ");
console.log(" ");