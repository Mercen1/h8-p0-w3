function angkaPalindrome(num) {
    while (num > 0) {
        num++
        var numKata = num.toString();
        var kataBaru = '';
        for (i = 1; i <= numKata.length; i++) {
            kataBaru += numKata[numKata.length - i];
        }
        if (kataBaru === numKata) {
            return num;
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001