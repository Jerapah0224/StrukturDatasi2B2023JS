const readline = require('readline');

// Daftar pengguna(username, password, nama lengkap, email)
let dataPengguna = [
    {username: 'admin', password: '12345', namaLengkap: 'Admin terbaik Markonah', email: 'adminSi23b@gmail.com'},
    {username: 'anggota', password: '67890', namaLengkap: 'Anggota terhebat Zoroooo', email:'anggotaSi23@gmail.com'}
];

// Membuat interface untuk input dan output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk melakukan login
function login(){
    rl.question('Masukkan username: ', (username) => {
        rl.question('Masukkan Password: ', (password) => {
            // Cari pengguna berdasarkan username dan password
            let prosesLogin = dataPengguna.find(user => user.username === username && user.password === password);
            if(prosesLogin){
                // jika pengguna ditemukan, tampilkan informasi pengguna
                console.log(`Selamat datang, ${prosesLogin.namaLengkap} (${prosesLogin.username})`);
                console.log(`Email: ${prosesLogin.email}`);
                console.log(' ');
            } else {
                // jika pengguna tidak ditemukan
                console.log('Username atau password salah. Silahkan coba lagi');
            };
            // tutup interface readline setelah selesai
            rl.close();
        });
    });
};

// Panggil fungsi login untuk memulai proses login
login();