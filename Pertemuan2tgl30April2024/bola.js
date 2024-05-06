const readLineSync = require('readline-sync');

let jariJari = parseFloat(readLineSync.question('Masukkan alas prisma: '));
        
let luasPermukaan = 4 * Math.PI * jariJari * jariJari;
let volume = (4/3) * Math.PI * jariJari * jariJari * jariJari;

console.log("Luas permukaan bola adalah: ", luas.toFixed(2), "cm");
console.log("Volume bola: ", volume.toFixed(2), "cm");