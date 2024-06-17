const prompt = require('prompt-sync')();

function login(username,password){
    if(username === "admin" && password === "admin123"){
        console.log("login berhasil");
    }else {
        console.log("login gagal. silahkan coba lagi.");
    };
};
let username = prompt("masukkan username: ");
let password = prompt("masukkan password: ");
login(username, password);