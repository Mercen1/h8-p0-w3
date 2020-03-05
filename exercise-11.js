function tentukanDeretAritmatika(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        var tampung = [];
        for (j = 0; j < arr.length - 1; j++) {
            tampung[j] = arr[j] - arr[j + 1];
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
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false