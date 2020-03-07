var input ='Hellow dunia' ;

function balikString(kata) {
    var balik = '';
    for (i = 1; i <= kata.length; i++) {
        balik += kata[kata.length - i]
    }

    return balik;
}
console.log(balikString(input))