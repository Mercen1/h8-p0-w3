//const kata = ['Hello world'];

//const target = kata[0];

// console.log(target);

function Balikkata(kata) {
    var balik = ''
    for (i = 1; i <= kata.length; i++) {

        balik += kata[kata.length - i]

    }
    return balik;
}
var warna = ['hijau', 'merah', 'hitam']
console.log(Balikkata(warna));
console.log(Balikkata('Hello dunia'))