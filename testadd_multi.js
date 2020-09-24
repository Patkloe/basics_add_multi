function testfac(nbre, exp){
   var result = 1;
   var result1 = 1;
   var result2 = 1;
   var result3 = 1;
   for(var i = 0; i < exp; i++){
       result = result * nbre;
       result1 *= nbre;
       result2 = result2 + nbre;
       result3 += nbre;
   }
   console.log("resultmulti :" + " " + result +"\n" + "resultmultiav :" + " " + result1 + "\n" + "resultadd :" + " " + result2 + "\n" + "resultaddav :" + " " + result3)
  }
  testfac(2,4);
