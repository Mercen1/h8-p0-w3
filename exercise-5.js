function palindrome(kata) {
    var kataBaru = '';
    for (i = 1; i <= kata.length; i++) {
        kataBaru += kata[kata.length - i];
    }
    if (kataBaru === kata) {
        return true
    } else {
        return false
    }

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false