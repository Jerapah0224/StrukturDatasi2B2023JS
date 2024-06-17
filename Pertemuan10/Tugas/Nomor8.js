const prompt = require('prompt-sync')();

function hitungVolume(sisi){
    return sisi * sisi * sisi;
};
function hitungLuasPermukaan(sisi){
    return 6 * (sisi * sisi);
};
//proses menerima input dari user
let sisi = parseFloat(prompt("Masukkan panjang sisi Kubus: "));
//proses memeriksa apakah terjadi kesalahan
if (sisi < 0){
    console.log("Terjadi Kesalahan: Sisi kubus tidak boleh bernilai negatif");
    console.log(" ");
} else {
    console.log(`Volume kubus: ${hitungVolume(sisi)}`);
    console.log(`Luas permukaan kubus: ${hitungLuasPermukaan(sisi)}`);
    console.log(" ");
};

