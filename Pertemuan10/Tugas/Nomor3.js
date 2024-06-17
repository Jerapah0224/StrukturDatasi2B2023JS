const prompt = require('prompt-sync')();

function rumusVolume(panjang, lebar, tinggi){
    return panjang * lebar * tinggi;
};
function rumusLuasPermukaan(panjang, lebar, tinggi){
    return 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
};

let panjangBalok = parseFloat(prompt("Masukkan panjang balok: "));
let lebarBalok = parseFloat(prompt("Masukkan lebar balok: "));
let tinggiBalok = parseFloat(prompt("Masukkan tinggi balok: "));

const volume = rumusVolume(panjangBalok, lebarBalok, tinggiBalok);
const luasPermukaan = rumusLuasPermukaan(panjangBalok, lebarBalok, tinggiBalok)

console.log(`Volume balok adalah ${volume}`);
console.log(`Luas Permukaan Balok adalah ${luasPermukaan}`);