const prompt = require('prompt-sync')();

function hitungBmi(berat,tinggiCM){
    let tinggiM = tinggiCM / 100;
    return berat /(tinggiM * tinggiM);
};
let berat = parseFloat(prompt("masukkan berat badan(kg): "));
let tinggiCM = parseFloat(prompt("masukkan tinggi badan(cm):"));

let bmi = hitungBmi(berat,tinggiCM);
console.log(`BMI anda adalah: ${bmi.toFixed(2)}`);