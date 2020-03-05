function tentukanDeretGeometri(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        var tampung = [];
        for (j = 0; j < arr.length - 1; j++) {
            tampung[j] = arr[j] / arr[j + 1];
        }
        var jumlahTampung = 0;
        for (k = 0; k < arr.length - 1; k++) {
            jumlahTampung += tampung[i];
        }
        var jawaban;
        if ((jumlahTampung / tampung.length) !== tampung[1]) {
            jawaban = false;
        } else {
            jawaban = true;
        }
    }
    return jawaban;
}


// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false