const prompt = require('prompt-sync')();

let daftarPesanan = [];
let riwayatTransaksi = [];

function buatPesanan(id, deskripsi, jumlah) {
    return { id, deskripsi, jumlah };
}

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

function buatPesananBaru() {
    const id = daftarPesanan.length + 1;
    const deskripsi = prompt('Masukkan deskripsi pesanan: ');
    const jumlah = parseFloat(prompt('Masukkan jumlah pesanan: '));
    const pesananBaru = buatPesanan(id, deskripsi, jumlah);
    daftarPesanan.push(pesananBaru);
    riwayatTransaksi.push({ jenis: 'Pesanan Baru', pesanan: pesananBaru });
    console.log('Pesanan berhasil dibuat.');
}

function lihatDaftarPesanan() {
    console.log('Daftar Pesanan:');
    daftarPesanan.forEach(pesanan => {
        console.log(`ID: ${pesanan.id}, Deskripsi: ${pesanan.deskripsi}, Jumlah: ${pesanan.jumlah}`);
    });
}

function cetakStruk() {
    const idPesanan = parseInt(prompt('Masukkan ID pesanan untuk mencetak struk: '));
    const daftarPesananTersortir = [...daftarPesanan].sort((a, b) => a.id - b.id);
    const indeks = binarySearch(daftarPesananTersortir, idPesanan);
    if (indeks !== -1) {
        const pesanan = daftarPesananTersortir[indeks];
        console.log('Struk:');
        console.log(`ID: ${pesanan.id}, Deskripsi: ${pesanan.deskripsi}, Jumlah: ${pesanan.jumlah}`);
        riwayatTransaksi.push({ jenis: 'Cetak Struk', pesanan: pesanan });
    } else {
        console.log('Pesanan tidak ditemukan.');
    }
}

function lihatRiwayatTransaksi() {
    console.log('Riwayat Transaksi:');
    riwayatTransaksi.forEach((transaksi, indeks) => {
        console.log(`${indeks + 1}. ${transaksi.jenis} - ID: ${transaksi.pesanan.id}, Deskripsi: ${transaksi.pesanan.deskripsi}, Jumlah: ${transaksi.pesanan.jumlah}`);
    });
}

function menuUtama() {
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
                lihatDaftarPesanan();
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
    }
}

menuUtama();
