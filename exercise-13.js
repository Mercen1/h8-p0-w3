function targetTerdekat(arr) {
    var hurufO;
    var hurufX = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            hurufO = i;
        }
        if (arr[i] === 'x') {
            hurufX.push(i)
        }
    }
    var hasil;
    if (hurufX.length === 0) {
        var hasil = 0;
    } else {
        var jarakNew = [];
        for (j = 0; j < hurufX.length; j++) {
            jarakNew[j] = Math.abs(hurufX[j] - hurufO)
        }
        for (k = 0; k < jarakNew.length - 1; k++) {
            if (jarakNew[k] < jarakNew[k + 1]) {
                var tampung = jarakNew[k]
                jarakNew[k] = jarakNew[k + 1]
                jarakNew[k + 1] = tampung
            }
        }
        hasil = jarakNew[jarakNew.length - 1]
    }

    return hasil;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2