let hargaBarang1 = parseFloat(prompt("Masukkan harga barang 1: "));
let jumlahBarang1 = parseFloat(prompt("Masukkan jumlah barang 1: "));
let hargaBarang2 = parseFloat(prompt("Masukkan harga barang 2: "));
let jumlahBarang2 = parseFloat(prompt("Masukkan jumlah barang 2: "));

let totalHargaBarang1= hargaBarang1 * jumlahBarang1;
let totalHargaBarang2 = hargaBarang2 * jumlahBarang2;
let totalBelanja = totalHargaBarang1 + totalHargaBarang2;

console.log("Harga barang 1: " + hargaBarang1);
console.log("Jumlah barang 1: " + jumlahBarang1);
console.log("Total Harga Barang 1: " + totalHargaBarang1);
console.log("Harga barang 2: " + hargaBarang2);
console.log("Jumlah barang 2: " + jumlahBarang2);
console.log("Total Harga Barang 2: " + totalHargaBarang2);
console.log("Total Balanja: " + totalBelanja);