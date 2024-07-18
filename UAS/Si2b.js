const readline = require('readline');
const prompt = require('prompt-sync')();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//d
let dataUser = [
    { username: 'admin', password: '1234', namaLengkap: 'Admin Ganteng', email: 'adminSi23b@gmail.com' },
    { username: 'user', password: '5678', namaLengkap: 'User Cantik', email: 'userterrSi23b@gmail.com' },
];

function login() {
    rl.question('\nMasukkan username: ', (username) => {
        rl.question('Masukkan Password: ', (password) => {
            let prosesLogin = dataUser.find(user => user.username === username && user.password === password);
            if (prosesLogin) {
                console.log(`Selamat datang, ${prosesLogin.namaLengkap} (${prosesLogin.username})`);
                console.log(' ');

                menuUtama();
            } else {
                console.log('Username atau password salah. Silakan coba lagi');
            }
        });
    });
}

//h
let daftarItemMenu = [
    { id: 1, namaItem: 'Nasi Goreng', hargaItem: 25000 },
    { id: 2, namaItem: 'Es Teh Manis', hargaItem: 5000 },
    { id: 3, namaItem: 'Mie Aceh', hargaItem: 25000 },
    { id: 4, namaItem: 'Jus Jeruk', hargaItem: 5000 },
    { id: 5, namaItem: 'Mie Balap', hargaItem: 15000 }
];
let daftarPesanan = [];
let riwayatTransaksi = [];

function binarySearch(arr, id) {
    let kiri = 0, kanan = arr.length - 1;
    while (kiri <= kanan) {
        const tengah = Math.floor((kiri + kanan) / 2);
        if (arr[tengah].id === id) {
            return tengah;
        } else if (arr[tengah].id < id) {
            kiri = tengah + 1;
        } else {
            kanan = tengah - 1;
        }
    }
    return -1;
}

function menuItem(id, namaItem, hargaItem) {
    return { id, namaItem, hargaItem };
}

function tambahItemMenu() {
    const id = daftarItemMenu.length + 1;
    const namaItem = prompt('Masukkan nama item menu: ');
    const hargaItem = parseFloat(prompt('Masukkan harga item menu: '));
    const itemMenu = menuItem(id, namaItem, hargaItem);
    daftarItemMenu.push(itemMenu);
    riwayatTransaksi.push({ jenis: 'Tambah Item Menu', itemMenu: { ...itemMenu } });
    console.log('Item menu berhasil ditambahkan');
    console.log('\n ----- Daftar Item Menu -----');
    daftarItemMenu.forEach(itemMenu => {
        console.log(`ID: ${itemMenu.id}, Nama Item: ${itemMenu.namaItem}, Harga: ${itemMenu.hargaItem}`)
    });
}

function lihatDaftarItemMenu() {
    console.log(' ----- Daftar Item Menu ----- ');
    daftarItemMenu.forEach(itemMenu => {
        console.log(`ID: ${itemMenu.id}, Nama Item: ${itemMenu.namaItem}, Harga: ${itemMenu.hargaItem}`)
    });
}

function editItemMenu() {
    const idItem = parseInt(prompt('Masukkan ID item menu untuk diedit: '));
    const itemIndex = binarySearch(daftarItemMenu, idItem);
    if (itemIndex !== -1) {
        const itemMenu = daftarItemMenu[itemIndex];
        const namaItemBaru = prompt(`Masukkan nama item menu baru (sekarang: ${itemMenu.namaItem}): `);
        const hargaItemBaru = parseFloat(prompt(`Masukkan harga item menu baru (sekarang: ${itemMenu.hargaItem}): `));
        
        if (namaItemBaru.trim() !== '' && !isNaN(hargaItemBaru) && hargaItemBaru > 0) {
            itemMenu.namaItem = namaItemBaru;
            itemMenu.hargaItem = hargaItemBaru;
            riwayatTransaksi.push({ jenis: 'Edit Item Menu', itemMenu: { ...itemMenu } });
            console.log('Item menu berhasil diedit');
        } else {
            console.log('Input tidak valid. Perubahan tidak disimpan.');
        }
    } else {
        console.log('Item menu tidak ditemukan');
    }
}

function hapusItemMenu() {
    const idItem = parseInt(prompt('Masukkan ID item menu untuk dihapus: '));
    const itemIndex = binarySearch(daftarItemMenu, idItem);
    if (itemIndex !== -1) {
        const itemMenu = daftarItemMenu[itemIndex];
        daftarItemMenu.splice(itemIndex, 1);
        riwayatTransaksi.push({ jenis: 'Hapus Item Menu', itemMenu: { ...itemMenu } });
        console.log('Item menu berhasil dihapus');
    } else {
        console.log('Item menu tidak ditemukan');
    }
}

function menuCafe() {
    while (true) {
        console.log('\n ===== Menu Cafe =====');
        console.log('1. Menambah item menu cafe');
        console.log('2. Melihat item menu cafe');
        console.log('3. Mengedit item menu cafe');
        console.log('4. Menghapus item menu cafe');
        console.log('5. Kembali ke menu utama');
        const pilihan = parseInt(prompt('Masukkan pilihan anda: '));
        switch (pilihan) {
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
                return;
            default:
                console.log('Pilihan tidak Valid, Silahkan coba lagi.');
        }
    }
}

//e
function buatPesanan(id, jumlah) {
    return { id, jumlah, tanggal: new Date().toISOString().slice(0, 10) };
}

function buatPesananBaru() {
    console.log('\n ----- Membuat Pesanan -----');
    lihatDaftarItemMenu();
    const id = parseInt(prompt('Pilih Menu berdasarkan ID Menu: '));
    const jumlah = parseFloat(prompt('Masukkan jumlah pesanan: '));
    const itemIndex = binarySearch(daftarItemMenu, id);
    if (itemIndex === -1) {
        console.log('ID menu tidak ditemukan/ tidak valid.');
        return;
    }
    const itemMenu = daftarItemMenu[itemIndex];
    const pesananBaru = buatPesanan(id, jumlah);
    daftarPesanan.push(pesananBaru);
    riwayatTransaksi.push({ jenis: 'Pesanan Baru', pesanan: pesananBaru });
    console.log('Pesanan berhasil dibuat: ', pesananBaru);

    const tanya = prompt('Ingin membuat pesanan baru lagi? (y/n): ');
    if (tanya === 'y') {
        buatPesananBaru();
    } else {
        console.log('Pesanan berhasil dibuat.');
    }
}

function lihatDaftarPesanan() {
    console.log('\n ----- Daftar Pesanan -----');
    daftarPesanan.forEach(pesanan => {
        console.log(`ID: ${pesanan.id}, Jumlah: ${pesanan.jumlah}`);
    });
}

function cetakStruk() {
    let totalHarga = 0;
    console.log('\n ----- Struk -----');
    daftarPesanan.forEach(pesanan => {
        const itemMenu = daftarItemMenu.find(item => item.id === pesanan.id);
        const hargaTotalItem = itemMenu.hargaItem * pesanan.jumlah;
        totalHarga += hargaTotalItem;
        console.log(`ID: ${pesanan.id}, Nama Item: ${itemMenu.namaItem}, Jumlah: ${pesanan.jumlah}, Harga: ${itemMenu.hargaItem}, Total: ${hargaTotalItem}`);
    });
    console.log(`\nTotal Harga: ${totalHarga} `);
    daftarPesanan.forEach(pesanan => {
        riwayatTransaksi.push({ jenis: 'Cetak Struk', pesanan });
    });
}

function lihatRiwayatTransaksi() {
    console.log('\n ----- Riwayat Transaksi -----');
    riwayatTransaksi.forEach((transaksi, indeks) => {
        if (transaksi.jenis === 'Tambah Item Menu') {
            console.log(`${indeks + 1}. ${transaksi.jenis} - ID: ${transaksi.itemMenu.id}, Nama: ${transaksi.itemMenu.namaItem}, Harga: ${transaksi.itemMenu.hargaItem}`);
        } else if (transaksi.jenis === 'Edit Item Menu') {
            console.log(`${indeks + 1}. ${transaksi.jenis} - ID: ${transaksi.itemMenu.id}, Nama: ${transaksi.itemMenu.namaItem}, Harga: ${transaksi.itemMenu.hargaItem}`);
        } else if (transaksi.jenis === 'Hapus Item Menu') {
            console.log(`${indeks + 1}. ${transaksi.jenis} - ID: ${transaksi.itemMenu.id}, Nama: ${transaksi.itemMenu.namaItem}, Harga: ${transaksi.itemMenu.hargaItem}`);
        } else if (transaksi.jenis === 'Pesanan Baru') {
            const itemMenu = daftarItemMenu.find(item => item.id === transaksi.pesanan.id);
            console.log(`${indeks + 1}. ${transaksi.jenis} - ID: ${transaksi.pesanan.id}, Nama: ${itemMenu.namaItem}, Jumlah: ${transaksi.pesanan.jumlah}`);
        } else if (transaksi.jenis === 'Cetak Struk') {
            const itemMenu = daftarItemMenu.find(item => item.id === transaksi.pesanan.id);
            console.log(`${indeks + 1}. ${transaksi.jenis} - ID: ${transaksi.pesanan.id}, Nama: ${itemMenu.namaItem}, Jumlah: ${transaksi.pesanan.jumlah}`);
        }
    });
}

function menuTransaksi() {
    while (true) {
        console.log('\n ===== Menu Transaksi =====');
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
                return;
            default:
                console.log('Pilihan tidak valid, Silahkan coba lagi.');
        }
    }
}

//a
function lapPenjualanHarian() {
    const tanggalHariIni = new Date().toISOString().slice(0, 10);
    console.log('\n ----- Laporan Penjualan Harian -----');
    let totalHargaHarian = 0;

    daftarPesanan.forEach(pesanan => {
        if (pesanan.tanggal === tanggalHariIni) {
            const itemMenu = daftarItemMenu.find(item => item.id === pesanan.id);
            const totalHargaItem = itemMenu.hargaItem * pesanan.jumlah;
            totalHargaHarian += totalHargaItem;
            console.log(`Item: ${itemMenu.namaItem}, Jumlah: ${pesanan.jumlah}, Total: ${totalHargaItem}`);
        }
    });
    console.log(`\nTotal Penjualan Harian: ${totalHargaHarian}`);
}

function lapPenjualanBulanan() {
    const bulanHariIni = new Date().toISOString().slice(0, 7);
    console.log('\n ----- Laporan Penjualan Bulanan -----');
    let totalHargaBulanan = 0;

    daftarPesanan.forEach(pesanan => {
        if (pesanan.tanggal.slice(0, 7) === bulanHariIni) {
            const itemMenu = daftarItemMenu.find(item => item.id === pesanan.id);
            const totalHargaItem = itemMenu.hargaItem * pesanan.jumlah;
            totalHargaBulanan += totalHargaItem;
            console.log(`Item: ${itemMenu.namaItem}, Jumlah: ${pesanan.jumlah}, Total: ${totalHargaItem}`);
        }
    });
    console.log(`\nTotal Penjualan Bulanan: ${totalHargaBulanan}`);
}

function menuLaporan() {
    while (true) {
        console.log('\n ===== Menu Laporan =====');
        console.log('1. Laporan penjualan harian');
        console.log('2. Laporan penjualan bulanan');
        console.log('3. Kembali ke menu utama');
        const pilihan = parseInt(prompt('Masukkan pilihan anda: '));
        switch (pilihan) {
            case 1:
                lapPenjualanHarian();
                break;
            case 2:
                lapPenjualanBulanan();
                break;
            case 3:
                return;
            default:
                console.log('Pilihan tidak valid, Silahkan coba lagi.');
        }
    }
}

//s
function menuUtama() {
    while (true) {
        console.log('\nMenu Utama:');
        console.log('1. Menu Cafe');
        console.log('2. Menu Transaksi');
        console.log('3. Menu Laporan');
        console.log('4. Keluar');
        const pilihan = parseInt(prompt('Masukkan pilihan anda: '));
        switch (pilihan) {
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
}

login();
