const prompt = require('prompt-sync')();

let kondisiProgram;
do {
    console.log(" ");
    let jariJari = parseFloat(prompt('Masukkan jari-jari silinder: '));
    let tinggi = parseFloat(prompt('Masukkan tinggi silinder: '));

    let volume = Math.PI * Math.pow(jariJari, 2) * tinggi;
    let luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi);

    console.log(`Volume silinder: ${volume.toFixed(2)}`);
    console.log(`Luas permukaan silinder: ${luasPermukaan.toFixed(2)}`);

    kondisiProgram = prompt('Apakah Anda ingin menghitung untuk silinder lain? (y/n): ').toLowerCase();
} while (kondisiProgram === 'y');

console.log("========== Program telah selesai ==========");
console.log("         Sistem Informasi 2 B 2023        ");
console.log(" ");
