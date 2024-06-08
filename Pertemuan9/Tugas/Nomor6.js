const prompt = require('prompt-sync')();

    let kondisi;
    do {
        // Meminta input panjang sisi dari user
        console.log(" ");
        let sisi = parseInt(prompt("Masukkan panjang sisi kubus:"));

        if (isNaN(sisi) || sisi <= 0) {
            console.log("Masukkan nilai yang valid dan lebih besar dari 0.");
            continue;
        }

        // Menghitung volume dan luas permukaan kubus
        let volume = sisi * sisi * sisi;
        let luasPermukaan = 6 * (sisi * sisi);

        // Menampilkan hasil perhitungan
        console.log(`Panjang sisi: ${sisi}`);
        console.log(`Volume kubus: ${volume.toFixed(2)}`);
        console.log(`Luas permukaan kubus: ${luasPermukaan.toFixed(2)}`);

        // Menanyakan apakah user ingin menghitung untuk kubus lain
        kondisi = prompt("Apakah Anda ingin menghitung untuk kubus lain? (yes/no)").toLowerCase();
    } while (kondisi === 'y');

    console.log("Program berhenti.");
    console.log("========== Program telah selesai ==========");
    console.log("         Sistem Informasi 2 B 2023        ");
    console.log(" ");




