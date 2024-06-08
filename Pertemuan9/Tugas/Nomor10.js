const prompt = require('prompt-sync')();

let kondisiProgram = true;
while (kondisiProgram) {
    console.log(" ");
    let nilai1 = parseFloat(prompt('Masukkan nilai pertama: '));
    let nilai2 = parseFloat(prompt('Masukkan nilai kedua: '));

    let operasi ;
    while (true) {
        operasi = prompt('Masukkan operasi (+, -, *, /): ');
        if (operasi === '+' || operasi === '-' || operasi === '*' || operasi === '/') {
            break;
        } else {
            console.log('Operasi tidak valid. Silakan masukkan operasi yang benar.');
        };
    };

    let hasil;
    switch (operasi) {
        case '+':
            hasil = nilai1 + nilai2;
            break;
        case '-':
            hasil = nilai1 - nilai2;
            break;
        case '*':
            hasil = nilai1 * nilai2;
            break;
        case '/':
            if (nilai2 !== 0) {
                hasil = nilai1 / nilai2;
            } else {
                hasil = 'Pembagian oleh nol tidak diperbolehkan!';
            }
            break;
    }
    console.log(`Hasil: ${hasil}`);

    let tanya = prompt('Apakah Anda ingin melakukan perhitungan lain? (y/n): ').toLowerCase();
    kondisiProgram = tanya === 'y';
}
console.log("========== Program telah selesai ==========");
console.log("         Sistem Informasi 2 B 2023        ");
console.log(" ");