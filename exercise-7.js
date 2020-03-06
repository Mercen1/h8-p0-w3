function hitungJumlahKata(kalimat) {
    var kataArr = [];
    var kataKata = '';
    for (i = 0; i < kalimat.length; i++) {
        if (kalimat[i] !== ' ') {
            kataKata += kalimat[i];
        } else if (kalimat[i] === ' ') {
            kataArr.push(kataKata);
            kataKata = '';
        }
        if (kalimat[i + 1] === undefined) {
            kataArr.push(kataKata);
        }
        panjang = kataArr.length;
    }
    return panjang;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5