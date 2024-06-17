const prompt = require('prompt-sync')();

function rumusVolume(p, l, t){
    return p * l * t;
};
function rumusLuasPermukaan(p, l, t){
    return 2 * ((p * l) + (p * t) + (l * t));
};
//proses input
let panjang = parseFloat(prompt("Masukkan panjang balok: "));
let lebar = parseFloat(prompt("Masukkan lebar balok: "));
let tinggi = parseFloat(prompt("Masukkan tinggi balok: "));
//proses output
console.log(`Volume balok adalah ${rumusVolume(panjang, lebar, tinggi)}`);
console.log(`Luas Permukaan Balok adalah ${rumusLuasPermukaan(panjang, lebar, tinggi)}`);
