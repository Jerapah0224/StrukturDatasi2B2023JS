let makanan = parseInt(prompt("Pilih nomor menu (1-5): "));
let pesanan;
switch (makanan) {
    case 1:
        pesanan = "Nasi Goreng";
        break;
    case 2:
        pesanan = "Mie Ayam";
        break;
    case 3:
        pesanan = "Soto Ayam";
        break;
    case 4:
        pesanan = "Gado-gado";
        break;
    case 5:
        pesanan = "Bakso";
        break;
    default:
        pesanan = "Menu tidak tersedia";
};
console.log("Anda memesan: " + pesanan);