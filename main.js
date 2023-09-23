/* let numero = prompt("ingrese un numero:")

if(numero == 4){
    console.log("El valor es 4");
}else if(numero < 4){
    console.log("el valor es menor a 4")
}else{
    numero = numero + 5;
    alert(numero);
}
 */

/* let nombre = "";
let numero = 5;
let esMenorA10 = numero < 10; //true

if(nombre && esMenorA10 && numero == 5){ // false && true && True => False
    console.log('hola mundo');
}
if(nombre || esMenorA10 || numero == 5){ // false || true|| True => False
    console.log('hola mundo');
}

if(nombre || esMenorA10 && numero == 5){ // false || true && True => true
    console.log('hola mundo');
} */

//EJERCICIO

/* let numero = prompt("Ingrese un numero: ");

if(numero > 10 && numero < 50){
    alert("El número, está entre los valores de 10 y 50");
}
console.log("el numero es: " + numero); */

//ejemplo

//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

/* let numero= parseInt(prompt("Ingrese un numero: "))

while (numero>=1) {
    numero++
    console.log("El resultado es: " + numero)
    numero= parseInt(prompt("Ingrese un numero: "))
} */

//ejemplo 2

//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

let texto = prompt("Ingrese un texto: ")
let valor= 0
while(texto != "ESC") {
    valor++
    console.log("Texto N°" + valor + "" +"ingresado es: " + texto);
    texto = prompt("Ingrese otro texto: ");
}