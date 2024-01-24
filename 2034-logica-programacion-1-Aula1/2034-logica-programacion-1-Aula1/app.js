//Variables 
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroMaximoPosible = 10;
let intentos = 1;
let palabraVeces = "Vez";
let maximosIntentos = 3;
let numeroUsuario = 0;
//"Mientras, el numero de usuario sea "diferente de numeroSecreto
console.log(numeroSecreto);
while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero del 1 al ${numeroMaximoPosible} por favor`));
    //La variable no es igualacion es asignacion
    //este codigo realiza
    //la comparacion
    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto){
        alert(`acercaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos  == 1 ? "vez" : "veces"}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert("el numero secreto es menor")
        } else{
            alert("el numero secreto es mayor")

    //Incrementamos elcontador cuando no acierta
    // intentos = intentos +1;
    //intentos += 1;
        }
        intentos ++;
        palabraVeces = "veces";
        if(intentos > 3) {
            alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        //Incrementamos el contador ccuando no acierta
    } 
}

