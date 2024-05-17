const prompt = require('prompt-sync')();

console.log(" ");
console.log(" ");
console.log("---------------------------------------------------------------");
console.log("SELAMAT DATANG DI PROGRAM UTS KELOMPOK JAVASCRIPT KELAS SI 2 B");
let userName = prompt("Masukkan Username: ");
let password = prompt("Masukkan Password: ");

if (userName == "admin" && password == 12345){
    console.log(" ");
    console.log("Menu Program: ");
    console.log("1. Program Kalkulator");
    console.log("2. Program Menghitung Luas Permukaan Bangun Ruang")
    let pilihProgram = parseInt(prompt("Silahkan pilih program(1 atau 2): "));                                         //|
    
    switch (pilihProgram) {
        case 1:
            console.log(" ");
            console.log("Selamat datang di Program Kalkulator ");
            let nilai1 = parseFloat(prompt("Masukkan Nilai Pertama: "));
            let operasi = prompt("Pilih operasi +, -, *, /, % : ");
            let nilai2 = parseFloat(prompt("Masukkan Nilai Kedua: "));
            let hasil;
            switch(operasi) {
                case '+':
                    hasil = nilai1 + nilai2;
                    break;
                case '-':
                    hasil = nilai1 - nilai2;
                    break;
                case '/':
                    hasil = nilai1 / nilai2;
                    break;
                case '*':
                    hasil = nilai1 * nilai2;
                    break;
                case '%':
                    hasil = nilai1 % nilai2;
                    break;
                default:
                    hasil = "Silahkan Ulangi program";
            };
            console.log("Hasil operasi Anda adalah: " + hasil);
            console.log("---------------------------------------------------------------");                         //|
            break;

        case 2:
            console.log(" ");
            console.log("Selamat datang di Program menghitung luas Permukaan bangun ruang");
            console.log("1. Kubus");
            console.log("2. Balok");
            console.log("3. Bola");
            let bangun = parseInt(prompt("Silah kan pilih (1-3): "));

            switch(bangun){
                case 1:
                    console.log(" ");
                    console.log("Program Menghitung Luas Permukaan Kubus");
                    let sisi = parseFloat(prompt('Masukkan sisi kubus: '));
                    let luasPermukaan = 6 * (sisi * sisi);
                    console.log("Luas Permukaan Kubus: " + luasPermukaan);
                    console.log("---------------------------------------------------------------");
                    break;

                case 2:
                    console.log(" ");
                    console.log("Program Menghitung Luas Permukaan Balok");
                    let panjang = parseFloat(prompt('Masukkan panjang balok: '));
                    let lebar = parseFloat(prompt('Masukkan lebar balok: '));
                    let tinggi = parseFloat(prompt('Masukkan tingg balok: '));
                    let luaspermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));            //|
                    console.log("Luas Permukaan Balok: " + luaspermukaan);
                    console.log("---------------------------------------------------------------");
                    break;

                case 3:
                    console.log(" ");
                    console.log("Program Menghitung Luas Permukaan Bola");
                    let jariJari = parseFloat(prompt('Masukkan jari jari bola: '));
                    let luaSPermukaan = 4 * Math.PI * jariJari * jariJari;
                    console.log("Luas permukaan bola adalah: " + luaSPermukaan.toFixed(3));
                    console.log("---------------------------------------------------------------");
                    break;
                default:
                    console.log("Anda tidak Memilih");    
            };
            break;
        default:
            console.log("Anda mungkin belum memilih.");
    };
} else{
    console.log("Maaf anda tidak memiliki akses");
};                                                                                                                  //|
