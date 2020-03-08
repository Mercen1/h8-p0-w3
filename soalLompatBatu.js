/* seekor kancil ingin menyeberang sungai yang terdapat banyak buaya. agar tidak dimakan buaya, kancil harus lompat ke batu batu yg ada di sungai.
kancil hanya bisa lompat batu dengan selisih 1 atau 2. kancil harus se efisien mungkin melompati sungai, sehingga kancil akan memilih batu dengan jumlah lompatan terkecil.
 0 menunjukkan batu untuk lompat
 1 menunjukan buaya yang wajib dilewati
 carilah jumlah lompatan terkecil kancil

CONSTRAIN
  index terkahir selalu 0, sehingga kancil pasti bisa melewati sungai tanpa dimakan buaya
 */

function lompatanTerpendek(c) {
  var awal=0;
  var lompatan=0;

  while(awal< c.length-1){

    if(c[awal+2]!==1){
      awal += 2;
      lompatan ++;
    }
    else if(c[awal+2]===1){
      awal ++;
      lompatan ++;
    }

  }
    
    return lompatan;
}

console.log(lompatanTerpendek([0, 0, 0, 0, 1, 0])); // 3
console.log(lompatanTerpendek([0, 0, 1, 0, 0, 1, 0])); // 4
console.log(lompatanTerpendek([0, 0, 0, 1, 0, 0])); // 3
console.log(lompatanTerpendek([0,0,0,0,0,1,0,1,0,0,1,0]))//6
console.log(lompatanTerpendek([0,0,0,0,0,0,0,0,0,0,0,0,00,0,0,0,00,1,0]))//9

