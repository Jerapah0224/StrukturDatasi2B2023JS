const prompt = require('prompt-sync')();

console.log(" ");
let nilai1 = parseFloat(prompt("Masukkan nilai pertama: "));
let nilai2 = parseFloat(prompt("Masukkan nilai kedua: "));
console.log(" ");

console.log("Penjumlahan: ");
for (i = 0; i < 5; i++){
    let tambah = nilai1 + nilai2;
    console.log(`${nilai1} + ${nilai2} = ${tambah}`);
};
console.log(" ");

console.log("Pengurangan: ");
for (i = 0; i < 5; i++){
    let kurang = nilai1 - nilai2;
    console.log(`${nilai1} - ${nilai2} = ${kurang}`);
};
console.log(" ");

console.log("Perkalian: ");
for (i = 0; i < 5; i++){
    let kali = nilai1 * nilai2;
    console.log(`${nilai1} * ${nilai2} = ${kali}`);
};
console.log(" ");

console.log("Pembagian: ");
for (i = 0; i < 5; i++){
    let bagi = nilai1 / nilai2;
    console.log(`${nilai1} / ${nilai2} = ${bagi}`);
};
console.log(" ");
console.log("========== Program telah selesai ==========");
console.log("         Sistem Informasi 2 B 2023        ");



