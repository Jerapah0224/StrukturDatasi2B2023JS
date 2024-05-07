let nilai1 = parseFloat(prompt("Masukkan nilai 1: "));
let nilai2 = parseFloat(prompt("Masukkan nilai 2: "));

if (nilai1 > nilai2) {
    console.log("Nilai 1 lebih besar dari nilai 2");
} else if( nilai1 < nilai2) {
    console.log("Nilai 1 lebih kecil dari nilai 2");
} else if(nilai1 == nilai2){
    console.log("Nilai 1 sama dengan nilai 2");
} else if (nilai1 != nilai2){
    console.log("nilai 1 tidak sama dengan nilai 2");
}