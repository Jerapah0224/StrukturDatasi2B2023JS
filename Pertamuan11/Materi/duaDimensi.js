// const prompt = require('prompt-sync')();
let matriks =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log("elemen matriks:");
matriks.forEach(baris => {
    baris.forEach(elemen =>{
        process.stdout.write(elemen + " ");
    });
    console.log();
})
    