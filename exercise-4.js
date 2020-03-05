function dataHandling2(input) {

    input[1] += 'Elsharawy';
    input[2] = 'Provinsi ' + input[2];
    input.splice(4, 2, 'Pria', 'SMA Internasional Metro');

    console.log(input);

    var tanggalLahir = input[3].split('/');
    var bulan;
    switch (tanggalLahir[1]) {
        case '01':
            bulan = 'Januari';
            break;
        case '02':
            bulan = 'Februari';
            break;
        case '03':
            bulan = 'Maret';
            break;
        case '04':
            bulan = 'April';
            break;
        case '05':
            bulan = 'Mei';
            break;
        case '06':
            bulan = 'Juni';
            break;
        case '07':
            bulan = 'Juli';
            break;
        case '08':
            bulan = 'Agustus';
            break;
        case '09':
            bulan = 'September';
            break;
        case '10':
            bulan = 'Oktober';
            break;
        case '11':
            bulan = 'November';
            break;
        case '12':
            bulan = 'Desember';
            break;
        default:
            break;
    }
    //console.log(tanggalLahir);
    var joinTanggal = tanggalLahir.join('-')
    console.log(bulan);

    for (i = 0; i < tanggalLahir.length; i++) {
        tanggalLahir[i] = Number(tanggalLahir[i]);
    }
    tanggalLahir.sort();
    for (i = 0; i < tanggalLahir.length; i++) {
        tanggalLahir[i] = tanggalLahir[i].toString();
        if (tanggalLahir[i].length === 1) {
            tanggalLahir[i] = '0' + tanggalLahir[i];
        }
    }
    console.log(tanggalLahir);
    console.log(joinTanggal);


    var inputSlice = input[1].slice(0, 15);
    console.log(inputSlice)
    return null
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);