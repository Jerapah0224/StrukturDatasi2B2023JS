const readLineSync = require('readline-sync');

        let panjang = parseFloat(readLineSync.question('Masukkan panjang balok: '));
        let lebar = parseFloat(readLineSync.question('Masukkan lebar balok: '));
        let tinggi = parseFloat(readLineSync.question('Masukkan tingg balok: '));
        
        let luasPermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));

        console.log("Luas Permukaan Balok: " + luasPermukaan);