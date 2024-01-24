/*
let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del no";


let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un n1 al 10"
*/

//aqui estamos ejecutando la funcion que se llama desde html, en js tu configuras la ejecucionde la funcion 
let numeroSecreto = generarNumeroSecreto();


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elemento.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDelUsuario = parseInt((document.getElementById("valorUsuario").value));
    console.log(typeof(numeroDelUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto))
    console.log(numeroDelUsuario);
    console.log(numeroDelUsuario === numeroSecreto);
    return;
}
function generarNumeroSecreto() {
    return Math.floor(Math.random()* 10)+1;
    //retornar signifa que cuando ejecutemos la funcion numerosecreto nos devolvera un valor en este caso el de un numero entero

}

asignarTextoElemento("h1", "Juego del numero secreto");
asignarTextoElemento("p","Indica un numero del 1 al 10" )
