const readLineSync = require('readline-sync');

        let panjangSisiTegak = parseFloat(readLineSync.question('Masukkan panjang sisi tegak: '));
        let tinggiSisiTegak = parseFloat(readLineSync.question('Masukkan tinggi sisi tegak: '));
        let alasSegitiga = parseFloat(readLineSync.question('Masukkan alas segitiga: '));
        let tinggiSegitiga = parseFloat(readLineSync.question('Masukkan tinggi segitiga: '));

        let luasAlas = 0.5 * alasSegitiga * tinggiSegitiga;
        let luasSisiTegak = 0.5 * panjangSisiTegak * tinggiSisiTegak;
        let luasPermukaan = luasAlas + luasSisiTegak;

        console.log("Luas Permukaan Limas: " + luasPermukaan);

      
        