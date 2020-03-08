// ada berapa pasang angka yang sama

function pasanganAngka(angkas) {
    var angkaKembar = [];
    var sudah = [];

    for (i = 0; i < angkas.length - 1; i++) {
        var tampung = [];
        for (j = i + 1; j < angkas.length; j++) {
            if (angkas[i] === angkas[j] && sudah[j] !== true && sudah[i] !== true) {
                angkaKembar.push(angkas[i]);
                sudah[j] = true;
                sudah[i] = true;
            }
        }
    }
    var hasil = angkaKembar.length;

    return hasil;
}

console.log(pasanganAngka([6, 1, 1, 1, 2, 2, 1, 7])); // 3
console.log(pasanganAngka([10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
console.log(pasanganAngka([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5])); //6
console.log(pasanganAngka([44, 55, 11, 15, 4, 72, 26, 91, 80, 14, 43, 78, 70, 75, 36, 83,
    78, 91, 17, 17, 54, 65, 60, 21, 58, 98, 87, 45, 75, 97, 81, 18, 51, 43, 84, 54, 66, 10, 44,
    45, 23, 38, 22, 44, 65, 9, 78, 42, 100, 94, 58, 5, 11, 69, 26, 20, 19, 64, 64, 93, 60, 96,
    10, 10, 39, 94, 15, 4, 3, 10, 1, 77, 48, 74, 20, 12, 83, 97, 5, 82, 43, 15, 86, 5, 35, 63,
    24, 53, 27, 87, 45, 38, 34, 7, 48, 24, 100, 14, 80, 54
])); // 30
console.log(pasanganAngka([10, 20, 30])); // 0
console.log(pasanganAngka([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42,
    42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42,
    42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42,
    42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42,
    42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42
])); // 50
console.log(pasanganAngka([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // 4