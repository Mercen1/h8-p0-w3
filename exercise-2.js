//const kata = ['Hello world'];

//const target = kata[0];

// console.log(target);

function balikString(kata) {
    var balik = ''
    for (i = 1; i <= kata.length; i++) {
        balik += kata[kata.length - i]
    }
    console.log(balik)
    return null;
}
balikString('Hello dunia')