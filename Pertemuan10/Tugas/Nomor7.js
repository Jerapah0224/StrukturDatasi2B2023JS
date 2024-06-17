const prompt = require('prompt-sync')();

function rumusVolume(s, t){
    return (1/3) * s * s * t;
};
function rumusLuasPermukaan(s, t){
    let luasAlas = s * s;
    let tinggiSegitiga = Math.sqrt(Math.pow(s / 2, 2) + Math.pow(t, 2));
    let luasSisiTegak = 2 * s * tinggiSegitiga;
    return luasAlas + luasSisiTegak;
};
//Proses Input, untuk meminta inputan dari user
let sisiAlas = parseFloat(prompt("Masukkan panjang sisi alas piramida: "));
let tinggi = parseFloat(prompt("Masukkan tinggi piramida: "));
//Memanggil funtion, dengan menggunakan variabel 
const luasPermukaan = rumusLuasPermukaan(sisiAlas, tinggi);
const volume = rumusVolume(sisiAlas, tinggi);
//Menampilkan output proses kepada user
console.log(`Luas Permukaan Piramida: ${luasPermukaan.toFixed(2)}`);
console.log(`Volume Piramida: ${volume.toFixed(2)}`);
