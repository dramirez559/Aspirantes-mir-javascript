/*________________________________________________________________________________________________  En un archivo llamado IMC.js escribe una función llamada bmi que reciba dos argumentos: peso y altura. Utiliza la formula para retornar el BMI correspondiente. Debes ejecutar tu archivo usando node.js node IMC.js _____________________________________________________________________*/

var peso = 65
var altura = 1.8

function bmi(){
    return peso/altura **2
}
const imc = bmi(peso,altura);
console.log(imc)

/*___________________________________________________________________________________________*/

function bmi(weight, height) {
    return weight / height ** 2
  }
  
  console.log("Tu IMC es: " + bmi(65, 1.8));