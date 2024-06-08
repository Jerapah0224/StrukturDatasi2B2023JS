const prompt = require('prompt-sync')();

console.log(" ");
const nilai1 = parseFloat(prompt("Masukkan nilai pertama:"));
const nilai2 = parseFloat(prompt("Masukkan nilai kedua:"));

while (true) {
    console.log(" ");
    const operator = prompt("Masukkan operator (+, -, *, /) atau 'exit' untuk keluar:");

    if (operator === 'exit') {
        console.log("========== Program telah selesai ==========");
        console.log("         Sistem Informasi 2 B 2023        ");
        console.log(" ");
    break;
    }

switch (operator) {
    case '+':
        console.log(`Hasil: ${nilai1 + nilai2}`);
        break;
    case '-':
        console.log(`Hasil: ${nilai1 - nilai2}`);
        break;
    case '*':
        console.log(`Hasil: ${nilai1 * nilai2}`);
        break;
    case '/':
        if (nilai2 !== 0) {
            console.log(`Hasil: ${nilai1 / nilai2}`);
        } else {
            console.log("Error: Pembagian oleh nol tidak diperbolehkan!");
        }
        break;
    default:
        console.log("Operator tidak valid. Silakan coba lagi!");
        console.log(" ");
    }
}
