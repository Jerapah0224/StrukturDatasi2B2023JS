const prompt = require('prompt-sync')();

let daftarPesanan = [];
let riwayatTransaksi = [];

function buatPesanan(id, deskripsi, jumlah){
    return { id, deskripsi, jumlah };
};

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const tengah = Math.floor(arr.length / 2);
    const kiri = mergeSort(arr.slice(0, tengah));
    const kanan = mergeSort(arr.slice(tengah));
    return merge(kiri, kanan);
};

function merge(kiri, kanan) {
    let hasil = [], indeksKiri = 0, indeksKanan = 0;
    while (indeksKiri < kiri.length && indeksKanan < kanan.length) {
        if (kiri[indeksKiri].jumlah < kanan[indeksKanan].jumlah) {
            hasil.push(kiri[indeksKiri++]);
        } else {
            hasil.push(kanan[indeksKanan++]);
        }
    }
    return hasil.concat(kiri.slice(indeksKiri)).concat(kanan.slice(indeksKanan));
};

function buatPesananBaru() {
    const id = daftarPesanan.length + 1;
    const deskripsi = prompt('Masukkan deskripsi pesanan: ');
    const jumlah = parseFloat(prompt('Masukkan jumlah pesanan: '));
    const pesananBaru = buatPesanan(id, deskripsi, jumlah);
    daftarPesanan.push(pesananBaru);
    riwayatTransaksi.push({ jenis: 'Pesanan Baru', pesanan: pesananBaru });
    console.log('Pesanan berhasil dibuat.');
};

function lihatPesanan() {
    console.log('Daftar Pesanan:');
    daftarPesanan.forEach(pesanan => {
        console.log(`ID: ${pesanan.id}, Deskripsi: ${pesanan.deskripsi}, Jumlah: ${pesanan.jumlah}`);
    });
};

function cetakStruk() {
    const idPesanan = parseInt(prompt('Masukkan ID pesanan untuk mencetak struk: '));
    const pesanan = daftarPesanan.find(o => o.id === idPesanan);
    if (pesanan) {
        console.log('Struk:');
        console.log(`ID: ${pesanan.id}, Deskripsi: ${pesanan.deskripsi}, Jumlah: ${pesanan.jumlah}`);
        riwayatTransaksi.push({ jenis: 'Cetak Struk', pesanan: pesanan });
    } else {
        console.log('Pesanan tidak ditemukan.');
    }
};

function lihatRiwayatTransaksi() {
    console.log('Riwayat Transaksi:');
    riwayatTransaksi.forEach((transaksi, index) => {
        console.log(`${index + 1}. ${transaksi.jenis} - ID: ${transaksi.pesanan.id}, Deskripsi: ${transaksi.pesanan.deskripsi}, Jumlah: ${transaksi.pesanan.jumlah}`);
    });
};

function mainMenu() {
    while (true) {
        console.log('\nMenu:');
        console.log('1. Buat Pesanan Baru');
        console.log('2. Lihat Daftar Pesanan');
        console.log('3. Cetak Struk');
        console.log('4. Lihat Riwayat Transaksi');
        console.log('5. Keluar');
        const pilihan = parseInt(prompt('Masukkan pilihan Anda: '));
        switch (pilihan) {
            case 1:
                buatPesananBaru();
                break;
            case 2:
                lihatPesanan();
                break;
            case 3:
                cetakStruk();
                break;
            case 4:
                lihatRiwayatTransaksi();
                break;
            case 5:
                console.log('Keluar...');
                return;
            default:
                console.log('Pilihan tidak valid. Silakan coba lagi.');
        }

        daftarPesanan = mergeSort(daftarPesanan);
        console.log('\nDaftar Pesanan Setelah Diurutkan:');
        daftarPesanan.forEach(pesanan => {
            console.log(`ID: ${pesanan.id}, Deskripsi: ${pesanan.deskripsi}, Jumlah: ${pesanan.jumlah}`);
        });
    }
};

mainMenu();
