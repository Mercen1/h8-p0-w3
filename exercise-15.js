function groupAnimals(animals) {
    const adjab = 'abcdefghijklmnopqrstuvwxyz';
    var kumpulHewan = [];

    for (var i = 0; i < adjab.length; i++) {
        var awalanHewan = [];
        for (k = 0; k < animals.length; k++) {
            if (animals[k][0] === adjab[i]) {
                awalanHewan.push(animals[k])
            }
        }
        if (awalanHewan.length > 0) {
            kumpulHewan.push(awalanHewan);
        }


    }
    return kumpulHewan;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]