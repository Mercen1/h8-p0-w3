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
        var JarakNew = [];
        for (j = 0; j < hurufX.length; j++) {
            JarakNew[j] = Math.abs(hurufX[j] - hurufO)
        }
        for (k = 0; k < JarakNew.length - 1; k++) {
            if (JarakNew[k] < JarakNew[k + 1]) {
                var tampung = JarakNew[k]
                JarakNew[k] = JarakNew[k + 1]
                JarakNew[k + 1] = tampung
            }
        }
        hasil = JarakNew[JarakNew.length - 1]
    }

    return hasil;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2