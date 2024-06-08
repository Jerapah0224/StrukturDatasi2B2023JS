const prompt = require('prompt-sync')();

while (true) {
    // Meminta input jari-jari dari user
    let jariJari = parseInt(prompt("Masukkan jari-jari lingkaran (angka negatif untuk berhenti):"));

    // Memeriksa apakah input adalah angka negatif
    if (jariJari < 0) {
        console.log("Program berhenti.");
        console.log("========== Program telah selesai ==========");
        console.log("         Sistem Informasi 2 B 2023        ");
        console.log(" ");
        break;
    }

    // Menghitung luas dan keliling lingkaran
    let luas = Math.PI * jariJari * jariJari;
    let keliling = 2 * Math.PI * jariJari;

    // Menampilkan hasil perhitungan
    console.log(`Jari-jari: ${jariJari}`);
    console.log(`Luas lingkaran: ${luas.toFixed(2)}`);
    console.log(`Keliling lingkaran: ${keliling.toFixed(2)}`);
    console.log(" ");
}