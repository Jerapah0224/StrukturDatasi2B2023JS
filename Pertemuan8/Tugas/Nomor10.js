const prompt = require('prompt-sync')();

let input = parseInt(prompt("Silahkan Pilih bulan Kelahiran anda (1-12): "));

switch(input){
    case 1:
        console.log("Anda Memilih 1 yaitu Bulan Januari.");
        break;
    case 2:
        console.log("Anda Memilih 2 yaitu Bulan Februari.");
        break;
    case 3:
        console.log("Anda Memilih 3 yaitu Bulan Maret.");
        break;
    case 4:
        console.log("Anda Memilih 4 yaitu Bulan April.");
        break;
    case 5:
        console.log("Anda Memilih 5 yaitu Bulan Mei.");
        break;
    case 6:
        console.log("Anda Memilih 6 yaitu Bulan Juni.");
        break;
    case 7:
        console.log("Anda Memilih 7 yaitu Bulan Juli.");
        break;
    case 8:
        console.log("Anda Memilih 8 yaitu Bulan Agustus.");
        break;
    case 9:
        console.log("Anda Memilih 9 yaitu Bulan September");
        break;
    case 10:
        console.log("Anda Memilih 10 yaitu Bulan Oktober.");
        break;
    case 11:
        console.log("Anda Memilih 11 yaitu Bulan November.");
        break;
    case 12:
        console.log("Anda Memilih 12 yaitu Bulan Desember.");
        break;
    default:
        console.log("Silahkan Ulangi program");
}