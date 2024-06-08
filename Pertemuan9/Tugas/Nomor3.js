const prompt = require('prompt-sync')();

let kondisiProgram = true;
const nilai1 = parseFloat(prompt("Masukkan nilai pertama:"));
const nilai2 = parseFloat(prompt("Masukkan nilai kedua:"));

do {
    console.log(" ");
    console.log("Menu Operasi Matematika:");
    console.log("1. Penjumlahan");
    console.log("2. Pengurangan");
    console.log("3. Pembagian");
    console.log("4. Perkalian");
    console.log("5. Keluar");
    const operasi = parseInt(prompt("Pilih operasi matematika:"));
        switch (operasi) {
            case 1:
                console.log(`Hasil: ${nilai1 + nilai2}`);
                console.log(" ");
                break;
            case 2:
                console.log(`Hasil: ${nilai1 - nilai2}`);
                console.log(" ");
                break;
            case 3:
                if (num2 !== 0) {
                    console.log(`Hasil: ${nilai1 / nilai2}`);
                    console.log(" ");
                } else {
                    console.log("Error: Pembagian oleh nol tidak diperbolehkan!");      //
                    console.log(" ");
                };
                break;
            case 4:
                console.log(`Hasil: ${nilai1 * nilai2}`);
                console.log(" ");
                break;
            case 5:
                kondisiProgram = false;
                console.log("========== Program telah selesai ==========");
                console.log("         Sistem Informasi 2 B 2023        ");
                console.log(" ");
                break;
            default:
                console.log("Pilihan tidak valid. Silakan coba lagi!");
                console.log(" ");
        };
} while (kondisiProgram);