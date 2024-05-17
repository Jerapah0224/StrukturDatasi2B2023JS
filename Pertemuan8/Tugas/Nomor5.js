const prompt = require('prompt-sync')();

let prodi = parseInt(prompt("Pilih Program Studi(1-4): "));

if(prodi === 1){
    console.log(`Anda memilih nomor ${prodi} yaitu PRODI SISTEM INFORMASI`);
} else if(prodi === 2){
    console.log(`Anda memilih nomor ${prodi} yaitu PRODI TEKNOLOGI INFORMASI`);
} else if(prodi === 3){
    console.log(`Anda memilih nomor ${prodi} yaitu PRODI MANAJEMEN INFORMATIKA`);
} else if(prodi === 4){
    console.log(`Anda memilih nomor ${prodi} yaitu PRODI AGROTEKNOLOGI`);
} else{
    console.log(`Untuk saat ini Fakultas Sains dan Teknologi di Universitas Labuhanbatu hanya ada 4 Prodi.`);
};

switch(prodi){
    case 1:
        console.log(`Anda memilih nomor ${prodi} yaitu PRODI SISTEM INFORMASI`);
        break;
    case 2:
        console.log(`Anda memilih nomor ${prodi} yaitu PRODI TEKNOLOGI INFORMASI`);
        break;
    case 3:
        console.log(`Anda memilih nomor ${prodi} yaitu PRODI MANAJEMEN INFORMATIKA`);
        break;
    case 4:
        console.log(`Anda memilih nomor ${prodi} yaitu PRODI AGROTEKNOLOGI`);
        break;
    default:
        console.log(`Untuk saat ini Fakultas Sains dan Teknologi di Universitas Labuhanbatu hanya ada 4 Prodi.`);
};