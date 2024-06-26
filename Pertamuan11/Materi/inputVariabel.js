//penambahan variabel prompt, agar bisa berjalan di vscode dengan nodeJS
const prompt = require('prompt-sync')();
const readline = require('readline');

const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});

//input array satu dimensi javascript
rl.question('Masukkan panjang array: ', (n) => {
    let arraySatuDimensi = [];
    (function inputArraySatuDimensi(index) {
        if(index < n){
            rl.question(`Masukkan nilai ke-${index+1}; `, (nilai) => {
                arraySatuDimensi.push(parseInt(nilai));
                inputArraySatuDimensi(index + 1);
            });
        } else{
            console.log('Array satu dimensi: ', arraySatuDimensi);
            //input array dua dimensi (matriks)
            rl.question('Masukkan jumlah baris matriks: ', (baris) => {
                rl.question('Masukkan jumlah kollom matriks: ', (kolom) => {
                    let matriks = [];

                    (function inputMatriks(i){
                        if (i < baris){
                            matriks[i] =[];

                            (function inputMatriksKolom(j){
                                if(j < kolom){
                                    rl.question(`Masukkan elemen matriks [${i}] [${j}]: `, (elemen) =>{
                                        matriks[i].push(parseInt(elemen));
                                        inputMatriksKolom(j + 1);
                                    });
                                } else{
                                    inputMatriks(i + 1)
                                }
                            }) (0);
                        } else{
                            console.log('Matriks: ');
                            matriks.forEach(row => console.log(row));
                            rl.close();
                        }
                    })(0);
                });
            });
        };
    })(0);
})