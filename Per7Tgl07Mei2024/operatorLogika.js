let umur = parseInt(prompt("Masukkan umur anda: "));
let pengalamanKerja = parseInt(prompt("Masukkan tahun pengalaman kerja Anda: "));

if (umur > 21 && pengalamanKerja >= 2 ) {
    console.log("Anda memenuhi syarat untuk melamar pekerjaan.");
} else if (umur <= 21 || pengalamanKerja < 2){
    console.log("Anda mungkin perlu menunggu beberapa tahun lagi sebelum melamar kerja. ");
} else if(!(umur >30 && pengalamanKerja >= 5)) {
    console.log("Anda tidak memnuhi syarat untuk posisi tingkat lanjut.");
}