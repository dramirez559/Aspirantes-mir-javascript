/*___________________________________________________________________________________________En un archivo llamado conditionals.js Escribre una función calcularColor que recibe un número como argumento y retorna un string de acuerdo al número:
1.Si el número es 1 retorna "El color es negro".
2.Si el número es 2 retorna "El color es blanco".Si el número es 3 retorna "El color es azul".
3.De lo contrario retorna "El color es verde".
El problema es que la función tiene algunos errores y no está funcionando. Tu misión es corregirla para que funcione correctamente según lo anterior.  

function calcuarColor() {   (falta la letra l, "num" deber ser puesto como argumento)
    var color;
    if (num === 1) {
      color = "black";
    } else (num = 2) {      (else es la ultima condicion. seria "else if", los iguales deben ser ===)
      color = "blanco":     (al final del codigo no van dos puntos sino ;)
    } else if (num === 3) {
      color = "rojo";
    } else {
      color: "verde";       (los : no van deben ir =)
    }
    return "El color es " + color;
}
  
  // código de prueba
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"          */


function calcularColor(num) {
    var color;
    if (num === 1) {
      color = "black";
    } 
    else if (num === 2) {
      color = "blanco";
    } 
    else if (num === 3) {
      color = "rojo";
    } 
    else {
        color = "verde";
    } 
    return "El color es " + color;
}
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"