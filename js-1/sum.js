/*_________________________________________________________________________________________________En un archivo llamado sum.js escribe una función llamada suma que reciba un número positivo y retorne la suma de todos los números desde 1 hasta ese número. Debes ejecutar tu archivo usando node.js node sum.js _____________________________________________________________________________________________*/

function suma(n){

    var num = 0;
    for (var i=1; i <= n; i++) {
      num += i;
    }
      return num;
    
  }
  console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
  console.log(suma(10)) // 55
  console.log(suma(15)) // 120