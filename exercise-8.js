function pasanganTerbesar(num) {
    var angkaNew='';
    var angkaString = num.toString();
    var duaDigit=[];
    for (i=0 ; i < angkaString.length-1 ; i++){
         duaDigit[i] =angkaString[i] + angkaString[i+1]
         }
         for(j=0 ; j <duaDigit.length ; j++){
             for (k=0; k< duaDigit.length; k++){
                if (duaDigit[k] > duaDigit[k+1]){
                var tampung = duaDigit[k];
                duaDigit[k] = duaDigit[k+1];
                duaDigit[k+1] = tampung ;
            }
        }
    }
    //console.log(duaDigit)
    //  duaDigit.sort();
    var digitBesar= duaDigit[duaDigit.length-1];
    //  return digitBesar;
    return digitBesar ;
    console.log(duaDigit)
        
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99