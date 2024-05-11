console.log("SELAMAT DATANG DI PROGRAM MENGHITUNG DISKON");

let totalBelanja = parseFloat(prompt("Masukkan total belanja anda: "));
let diskon = 0;
let kategoriDiskon = " ";

if (totalBelanja >= 590000 && totalBelanja <= 1000000 ){
    diskon = 0.30;
    kategoriDiskon = "Diamond";
} else if (totalBelanja >= 150000 && totalBelanja < 590000){
    diskon = 0.23;
    kategoriDiskon = "Platinum";
} else if (totalBelanja >= 95000 && totalBelanja < 150000 ){
    diskon = 0.15;
    kategoriDiskon = "Gold";
} else if (totalBelanja >= 23000 && totalBelanja < 95000){
    diskon = 0.10;
    kategoriDiskon = "Silver";
} else {
    kategoriDiskon = "Diskon tidak tersedia";
};

if ( kategoriDiskon !== "Diskon tidak tersedia"){
    console.log(`Selamat anda mendapatkan diskon ${kategoriDiskon} sebesar ${diskon * 100}%`);
} else {
    console.log("Mohon maaf, total belanja anda belum memenuhi syarat diskon.");
}
