
/***************** */
function hola(){
    console.log("¡Hola, mundo!")
}
/*********** */
function Mostrarnombre(){
    let nombre = prompt("ingresa tu nombre")
    console.log(`Hola, ${nombre}`)
}
Mostrarnombre("Jorge");


//*************** */
/*
Creamos una función en JavaScript que recibe 2 parámetros para
generar un número aleatorio y entendimos cómo utilizar la estructura
de una función para encapsular un bloque de código reutilizable.
Utilizamos la palabra clave "return" dentro de la función para devolver el valor
del número aleatorio generado y creamos otra función llamada "exibirMensageInicial" 
que no tiene ni retorno ni parámetros.
Comprendimos la diferencia entre funciones con retorno y funciones sin retorno, 
y aprendimos cómo llamar e invocar la función para mostrar un mensaje inicial en la pantalla.
Vimos cómo los parámetros y los valores de retorno son importantes para la 
comunicación entre funciones y el resto del programa.
*/
function duplicador(numero){
    return numero*2
}
let resultadoDoble = duplicador(5);
console.log(resultadoDoble)

function promedio(num1,num2,numero3){
    return (num1+num2+num3)/3;
}
let numeros = promedio(1,3,4);
console.long(numeros)

function encontrarmayor(a,b){
    return (a > b ? a:b);
}
let numeromayor = encontrarmayor(15,9);
console.log(numeromayor);

function number(a){
    return a*a;
}
let numero = number(3);
console.log(numero);

let listaCompras = [];

listaCompras.push("Manzana");
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");
