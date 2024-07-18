const { log } = require('console');
const readline = require('readline');
const prompt = require('prompt-sync')();

// untuk program login()
//membuat interface untuk input dan output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Data pengguna
let dataUser = [
    {username: 'admin', password: '1234', namaLengkap: 'Admin Ganteng', email: 'adminSi23b@gmail.com'},
    {username: 'waitress', password: '5678', namaLengkap: 'Waitress Cantik', email:'waitress23@gmail.com'},
];

//function untuk login
function login(){
    rl.question('\nMasukkan username: ', (username) => {
        rl.question('Masukkan Password: ', (password) =>{
            //cari pengguna berdasarkan username dan password
            let prosesLogin = dataUser.find(user => user.username === username && user.password === password);
            if(prosesLogin){
                //jika pengguna ditemukan, tampilkan informasi pengguna
                console.log(`Selamat datang, ${prosesLogin.namaLengkap} (${prosesLogin.username})`);
                console.log(' ');

                //setelah login berhasil, jalankan menu utama
                menuUtama();
            } else{
                //jika pengguna tidak ditemukan
                console.log('username atau password salah. Silahkab coba lagi');
            };
            //tutup interface readline setelah selesai
            rl.close();
        })
    }) 
    
};

//untuk program menuUtama()
//variabel penampung
let daftarItemMenu = [
    { id: 1, namaItem: 'Nasi Goreng', deskripsi: 'Nasi goreng spesial dengan telur dan ayam', hargaItem: 25000 },
    { id: 2, namaItem: 'Mie Ayam', deskripsi: 'Mie ayam dengan pangsit rebus dan kuah kental', hargaItem: 20000 },
    { id: 3, namaItem: 'Es Teh Manis', deskripsi: 'Es teh manis dingin', hargaItem: 5000 }
];
let daftarPesanan = [];
let riwayatTransaksi = [];

function binarySearch(arr, id){
    let kiri = 0, kanan = arr.length - 1;
    while (kiri <= kanan){
        const tengah = Math.floor((kiri + kanan) / 2);
        if (arr[tengah].id === id){
            return tengah;
        } else if (arr[tengah].id < id){
            kiri = tengah + 1;
        } else{
            kanan = tengah -1;
        }
    }
    return - 1;
};

// menu 1 | function untuk menuCafe()
function menuItem(id, namaItem, deskripsiItem, hargaItem){
    return { id, namaItem, deskripsiItem, hargaItem};
}

function tambahItemMenu() {
    const id = daftarItemMenu.length + 1;
    const namaItem = prompt('Masukkan nama item menu: ');
    const deskripsiItem = prompt('Masukkan dekripsi item menu: ');
    const hargaItem = parseFloat(prompt('Masukkan harga item menu: '));
    const itemMenu = menuItem( id, namaItem, deskripsiItem, hargaItem) ;
    daftarItemMenu.push(itemMenu);
    riwayatTransaksi.push({ jenis: 'Tambah Item Menu ', itemMenu: itemMenu });

    const tanya = prompt('Ingin membuat Item menu baru lagi? (y/n): ');
    if (tanya === 'y'){
        tambahItemMenu();
    } else {
        console.log('Item menu berhasil ditambahkan');
        console.log('\n Daftar Item Menu:');
        daftarItemMenu.forEach(itemMenu => {
            console.log(`ID: ${itemMenu.id}, Nama Item: ${itemMenu.namaItem}, Deskripsi: ${itemMenu.deskripsiItem}, Harga: ${itemMenu.hargaItem}`)
        });
    }


};

function lihatDaftarItemMenu(){
    console.log('Daftar Item Menu: ');
    daftarItemMenu.forEach(itemMenu => {
        console.log(`ID: ${itemMenu.id}, Nama Item: ${itemMenu.namaItem}, Deskripsi: ${itemMenu.deskripsiItem}, Harga: ${itemMenu.hargaItem}`)
    });
};

function editItemMenu(){
    const idItem = parseInt(prompt('Masukkan ID item menu untuk diedit: '));
    const daftarItemMenuTersortir = [...daftarItemMenu].sort((a, b) => a.namaItem.localeCompare(b.namaItem));
    const indeks = binarySearch(daftarItemMenuTersortir, idItem);

    if (indeks !== -1){
        const itemMenu = daftarItemMenuTersortir[indeks];
        const namaItemBaru = prompt(`Masukkan nama item menu baru (sekarang: ${itemMenu.namaItem}): `);
        const deskripsiItemBaru = prompt(`Masukkan dekripsi item menu baru (sekarang: ${itemMenu.deskripsiItem}): `);
        const hargaItemBaru = parseFloat(prompt(`Masukkan harga item menu baru( sekarang: ${itemMenu.hargaItem}): `));
        itemMenu.namaItem = namaItemBaru;
        itemMenu.deskripsiItem = deskripsiItemBaru;
        itemMenu.hargaItem = hargaItemBaru;
        riwayatTransaksi.push({ jenis: 'Edit Item Menu', itemMenu: itemMenu });
        console.log('Item menu berhasil diedit');
    } else {
        console.log('Item menu tidak ditemukan');
    }
};

function hapusItemMenu(){
    const idItem = parseInt(prompt('Masukkan ID item menu untuk dihapus: '));
    const daftarItemMenuTersortir = [...daftarItemMenu].sort((a, b) => a.namaItem.localeCompare(b.namaItem));
    const indeks = binarySearch(daftarItemMenuTersortir, idItem);
    if (indeks !== -1){
        const itemMenu = daftarItemMenuTersortir[indeks];
        daftarItemMenu.splice(indeks, 1);
        riwayatTransaksi.push({ jenis: 'Hapus Item Menu', itemMenu: itemMenu });
        console.log('Item menu berhasil dihapus');
    } else {
        console.log('Item menu tidak ditemukan');
    }
};

function menuCafe(){
    while (true) {
        console.log('\n ===== Menu Cafe =====');
        console.log('1. Menambah item menu cafe');
        console.log('2. Melihat item menu cafe');
        console.log('3. Mengedit item menu cafe');
        console.log('4. Menghapus item menu cafe');
        console.log('5. Kembali ke menu utama');

        const pilihan = parseInt(prompt('Masukkan pilihan anda: '));
        switch (pilihan){
            case 1:
                tambahItemMenu();
                break;
            case 2: 
                lihatDaftarItemMenu();
                break;
            case 3:
                editItemMenu();
                break;
            case 4:
                hapusItemMenu();
                break;
            case 5:
                menuUtama();
                break;
            default:
                console.log('Pilihan tidak Valid, Silahkan coba lagi.');
        }
    }
};

//menu 2 | function untuk menuTransaksi()
function buatPesanan(id, jumlah, deskripsi){
    const tanggal = new Date().toISOString().slice(0, 10);
    return { id, jumlah, deskripsi, tanggal};
};

function buatPesananBaru(){
    console.log('\n ----- Membuat Pesanan -----');
    lihatDaftarItemMenu();

    const id = parseInt(prompt('Pilih Menu berdasarkan ID Menu: '));
    const jumlah = parseFloat(prompt('Masukkan jumlah pesanan: '));
    const deskripsi = prompt('Ingin menambahkan kriteria pesanan: ');

    //validasi input id item menu
    const itemMenu = daftarItemMenu.find(item => item.id === id);
    if (!itemMenu){
        console.log('ID menu tidak ditemukan/ tidak valid.');
        return;
    };

    //buat pesanan baru
    const pesananBaru = buatPesanan(id, jumlah, deskripsi);
    if (pesananBaru){
        daftarPesanan.push(pesananBaru);
        riwayatTransaksi.push({ jenis: 'Pesanan Baru', pesanan: pesananBaru});
        console.log('Pesanan berhasil dibuat: ', pesananBaru);
    } else {
        console.log('Gagal membuat pesanan.')
    }

    const tanya = prompt('Ingin membuat pesanan baru lagi? (y/n): ');
    if (tanya === 'y') {
        buatPesananBaru();
    } else {
        console.log('Pesanan berhasil dibuat.');
    }
};

function lihatDaftarPesanan(){
    console.log('\n ----- Daftar Pesanan -----');
    daftarPesanan.forEach(pesanan => {
        console.log(`ID: ${pesanan.id}, Jumlah: ${pesanan.jumlah}, Deskripsi: ${pesanan.deskripsi}`);
    });
};

function cetakStruk(){
    let totalHarga = 0;
    console.log('\n ----- Struk -----');
    daftarPesanan.forEach(pesanan => {
        const itemMenu = daftarItemMenu.find(item => item.id === pesanan.id);
        const hargaTotalItem = itemMenu.hargaItem * pesanan.jumlah;
        totalHarga += hargaTotalItem;
        console.log(`ID: ${pesanan.id}, Nama Item: ${itemMenu.namaItem}, Jumlah: ${pesanan.jumlah}, Harga: ${itemMenu.hargaItem}, Total: ${hargaTotalItem}`);
    });
    console.log(`\n Total Harga: ${totalHarga} `);

    //menambahkan pesanana ke riwayat transaksi
    daftarPesanan.forEach(pesanan => {
        riwayatTransaksi.push({ jenis: 'Cetak Struk', pesanan});
    });

    const tanya = prompt('Ingin mencetak daftar pesanan lagi? (y/n): ');
    if (tanya.toLowerCase() === 'y') {
        cetakStruk();
    }
};

function lihatRiwayatTransaksi(){
    console.log('\n ----- Riwayat Transaksi -----');
    riwayatTransaksi.forEach((transaksi, indeks) => {
        if (transaksi.jenis === 'Tambah Item Menu') {
            console.log(`${indeks + 1}. ${transaksi.jenis} - ID: ${transaksi.itemMenu.id}, Nama: ${transaksi.itemMenu.namaItem}, Deskripsi: ${transaksi.itemMenu.deskripsiItem}, Harga: ${transaksi.itemMenu.hargaItem}`);
        } else if(transaksi.jenis === 'Edit Item Menu'){
            console.log(`${indeks + 1}. ${transaksi.jenis} - ID: ${transaksi.itemMenu.id}, Nama: ${transaksi.itemMenu.namaItem}, Deskripsi: ${transaksi.itemMenu.deskripsiItem}, Harga: ${transaksi.itemMenu.hargaItem}`);
        } else if(transaksi.jenis === 'Hapus Item Menu'){
            console.log(`${indeks + 1}. ${transaksi.jenis} - ID: ${transaksi.itemMenu.id}, Nama: ${transaksi.itemMenu.namaItem}, Deskripsi: ${transaksi.itemMenu.deskripsiItem}, Harga: ${transaksi.itemMenu.hargaItem}`);
        } else if(transaksi.jenis === 'Pesanan Baru'){
            const itemMenu = daftarItemMenu.find(item => item.id === transaksi.pesanan.id);
            console.log(`${indeks + 1}. ${transaksi.jenis} - ID: ${transaksi.pesanan.id}, Nama: ${itemMenu.namaItem}, Jumlah: ${transaksi.pesanan.jumlah}, Deskripsi: ${transaksi.pesanan.deskripsi}`);
        } else if(transaksi.jenis === 'Cetak Struk'){
            const itemMenu = daftarItemMenu.find(item => item.id === transaksi.pesanan.id);
            console.log(`${indeks + 1}. ${transaksi.jenis} - ID: ${transaksi.pesanan.id}, Nama: ${itemMenu.namaItem}, Jumlah: ${transaksi.pesanan.jumlah}, Deskripsi: ${transaksi.pesanan.deskripsi}`);
        }
    });
};

function menuTransaksi(){
    while (true) {
        console.log('\n ===== Menu Cafe =====');
        console.log('1. Membuat Pesanan');
        console.log('2. Melihat Daftar Pesanan');
        console.log('3. Mencetak Struk');
        console.log('4. Melihat Riwayat Transaksi');
        console.log('5. Kembali ke menu utama');

        const pilihan = parseInt(prompt('Masukkan pilihan Anda: '));
        switch (pilihan) {
            case 1:
                buatPesananBaru();
                break;
            case 2:
                lihatDaftarPesanan();
                break;
            case 3:
                cetakStruk();
                break;
            case 4: 
                lihatRiwayatTransaksi();
                break;
            case 5:
                menuUtama();
                break;
            default:
                console.log('Pilihan tidak valid, Silahkan coba lagi.');
        }
    }
};

//meu 3 | function untuk menuLaporan()
function lapPenjualanHarian(){
    const tanggalHariIni = new Date().toISOString().slice(0, 10);
    console.log('\n ----- Laporan Penjualan Harian -----');
    let totalHargaHarian = 0;

    daftarPesanan.forEach(pesanan => {
        if (pesanan.tanggal === tanggalHariIni) {
            const itemMenu = daftarItemMenu.find(item => item.id === pesanan.id);
            const totalHargaItem = itemMenu.hargaItem * pesanan.jumlah;
            totalHargaHarian += totalHargaItem;
            console.log(`Item: ${itemMenu.namaItem}, Jumlah: ${pesanan.jumlah}, Total: ${totalHargaItem}, Deskripsi: ${pesanan.deskripsi}`);
        }
    });
    console.log(`\nTotal Penjualan Harian: ${totalHargaHarian}`);
};

function lapPenjualanBulanan(){
    const bulanHariIni = new Date().toISOString().slice(0, 7);
    console.log('\n ----- Laporan Penjualan Bulanan -----');
    let totalHargaBulanan = 0;

    daftarPesanan.forEach(pesanan => {
        if (pesanan.tanggal.slice(0, 7) === bulanHariIni) {
            const itemMenu = daftarItemMenu.find(item => item.id === pesanan.id);
            const totalHargaItem = itemMenu.hargaItem * pesanan.jumlah;
            totalHargaBulanan += totalHargaItem;
            console.log(`Item: ${itemMenu.namaItem}, Jumlah: ${pesanan.jumlah}, Total: ${totalHargaItem}, Deskripsi: ${pesanan.deskripsi}`);
        }
    });
    console.log(`\nTotal Penjualan Bulanan: ${totalHargaBulanan}`);
};

function menuLaporan(){
    while (true){
        console.log('\n ===== Menu Laporan =====');
        console.log('1. Laporan penjualan harian');
        console.log('2. Laporan penjualan bulanan');
        console.log('3. Kembali ke menu utama');

        const pilihan = parseInt(prompt('Masukkan pilihan anda: '));
        switch (pilihan){
            case 1:
                lapPenjualanHarian();
                break;
            case 2:
                lapPenjualanBulanan();
                break;
            case 3:
                menuUtama();
                break;
            default:
                console.log('Pilihan tidak valid. Silahkan coba lagi.')
        }
    }
};



function menuUtama(){
    while (true) {
        console.log('\nMenu Utama:');
        console.log('1. Menu Cafe');
        console.log('2. Menu Transaksi');
        console.log('3. Menu Laporan');
        console.log('4. Keluar')
        const pilihan = parseInt(prompt('Masukkan pilihan anda: '));
        switch (pilihan){
            case 1:
                menuCafe();
                break;
            case 2:
                menuTransaksi();
                break;
            case 3:
                menuLaporan();
                break;
            case 4:
                console.log('=====----- Program telah Selesai -----=====');
                console.log('........... Sistem Informasi 2 b ..........\n');
                rl.close();
                process.exit();
                break;
            default:
                console.log('Pilihan tidak valid. Silahkan coba lagi.');
        }
    }
};

//untuk memulai program 
login();



