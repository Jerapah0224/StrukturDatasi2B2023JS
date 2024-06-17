const prompt = require('prompt-sync')();

function rumusVolume(sisiAlas, tinggi){
    return (1/3) * sisiAlas * sisiAlas * tinggi;
};
function rumusLuasPermukaan(sisiAlas, tinggi){
    let luasAlas = sisiAlas * sisiAlas;
    let tinggiSegitiga = Math.sqrt(Math.pow(sisiAlas / 2, 2) + Math.pow(tinggi, 2));
    let luasSisiTegak = 2 * sisiAlas * tinggiSegitiga;
    return luasAlas + luasSisiTegak;
};

//melakukan input pada program
let sisiAlas = parseFloat(prompt("Masukkan panjang sisi alas piramida: "));
let tinggi = parseFloat(prompt("Masukkan tinggi piramida: "));
//Deklarasi nilai variabel dengan nilai dari function
const luasPermukaan = rumusLuasPermukaan(sisiAlas, tinggi);
const volume = rumusVolume(sisiAlas, tinggi);
//menampilkan output
console.log(`Luas Permukaan Piramida: ${luasPermukaan.toFixed(2)}`);
console.log(`Volume Piramida: ${volume.toFixed(2)}`);
console.log(" ");