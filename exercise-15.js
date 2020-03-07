function groupAnimals(animals) {
    var hasil = [];
    var sudah = [];
    for (var i = 0; i < animals.length; i++) {
        var tampung = [];
        for (var j = 0; j < animals.length; j++) {
            if (animals[i][0] === animals[j][0] && sudah[j] !== true) {
                tampung.push(animals[j])
                sudah[j] = true;
            }
        }
        if (tampung.length > 0) {
            hasil.push(tampung);
        }
    }
    for (k = 0; k < hasil.length; k++) {
        for (l = 0; l < hasil.length - 1; l++) {
            if (hasil[l][0][0] > hasil[l + 1][0][0]) {
                var urut = hasil[l];
                hasil[l] = hasil[l + 1];
                hasil[l + 1] = urut;
            }
        }
    }

    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]