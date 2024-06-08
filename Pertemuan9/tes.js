const prompt = require('prompt-sync')();

let kondisi = true;
while (kondisi) {
    let tanyaPerulangan = parseInt(prompt("Ingin melakukan perulangan berapa kali: "));
    for (let i = 1; i <= tanyaPerulangan; i++) {
        console.log(" ");
        console.log(`Program perulangan ke ${i}`);
        const nilai1 = parseFloat(prompt("Masukkan angka pertama:"));
        const nilai2 = parseFloat(prompt("Masukkan angka kedua:"));

        console.log("Menu Operasi Matematika:");
        console.log("1. Penjumlahan");
        console.log("2. Pengurangan");
        console.log("3. Pembagian");
        console.log("4. Perkalian");
        console.log("5. Keluar");

        const operasi = parseInt(prompt("Pilih operasi matematika(1-5):"));
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
                if (nilai2 !== 0) {
                    console.log(`Hasil: ${nilai1 / nilai2}`);
                    console.log(" ");
                } else {
                    console.log("Error: Pembagian oleh nol tidak diperbolehkan!");
                    console.log(" ");
                }
                break;
            case 4:
                console.log(`Hasil: ${nilai1 * nilai2}`);
                console.log(" ");
                break;
            case 5:
                kondisi = false;
                console.log("========== Program telah selesai ==========");
                console.log("         Sistem Informasi 2 B 2023        ");
                console.log(" ");
                break;
            default:
                console.log("Pilihan tidak valid. Silakan coba lagi!");
                console.log(" ");
        }
    }
}