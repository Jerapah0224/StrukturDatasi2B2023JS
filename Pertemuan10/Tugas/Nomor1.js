const prompt = require('prompt-sync')();

let panjang = parseFloat(prompt('Masukkan panjang balok: '));
let lebar = parseFloat(prompt('Masukkan lebar balok: '));
let tinggi = parseFloat(prompt('Masukkan tinggi balok: '));

let tanya = parseInt(prompt("Ingin melakukan dengan fungsi(1) atau dengan prosedur(2): "));
let hasil;
switch(tanya){
    case 1:
        //Menggunakan fungsi
        function fungsiBalok(panjang, lebar, tinggi){
            let luasPermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
            let volume = panjang * lebar * tinggi;
        
            console.log('===== Menggunakan fungsi =====')
            console.log(`Luas Permukaan Balok: ${luasPermukaan} `);
            console.log(`Volume Balok: ${volume} `);
            console.log(" ");
            return luasPermukaan, volume;
        };
        hasil = fungsiBalok(panjang,lebar, tinggi);
        break;

    case 2:
        //Menggunakan prosedur
        function prosedurBalok(panjang, lebar, tinggi){
            let luasPermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
            let volume = panjang * lebar * tinggi;    
        
            console.log('===== Menggunakan prosedur =====')
            console.log(`Luas Permukaan Balok: ${luasPermukaan} `);
            console.log(`Volume Balok: ${volume} `);
            console.log(" ");
        };
        
        hasil = prosedurBalok(panjang,lebar, tinggi);
        break;
    default:
        console.log(" Silahkan ulangi program.");
        break;
};