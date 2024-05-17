const prompt = require('prompt-sync')();

let hari = parseInt(prompt("Silahkan masukkan hari (1-7): "));

switch(hari){
    case 1:
        console.log(`Anda Memilih ${hari} yaitu Hari Senin`);
        break;
    case 2:
        console.log(`Anda Memilih ${hari} yaitu Hari Selasa`);
        break;
    case 3:
        console.log(`Anda Memilih ${hari} yaitu Hari Rabu`);
        break;
    case 4:
        console.log(`Anda Memilih ${hari} yaitu Hari Kamis`);
        break;
    case 5:
        console.log(`Anda Memilih ${hari} yaitu Hari Jumat`);
        break;
    case 6:
        console.log(`Anda Memilih ${hari} yaitu Hari Sabtu`);
        break;
    case 7:
        console.log(`Anda Memilih ${hari} yaitu Hari Minggu`);
        break;
    default:
        console.log("Hanya 1-7 saja, Silahkan Ulangi Program.")    
}