//-Gioco dei dadi
//Il giocatore gioca contro il computer.
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.


//Genero un numero random per il computer
//Genero un numero random per il giocatore
//    Creo un pulsante da premere per far generare il numero del giocatore
//Se numero computer maggiore del giocatore allora vince il computer, sennò vince il giocatore, se numero uguale è patta
//BONUS: inserisco degli output visivi nella pagina


const btn = document.querySelector("button");
const pcOut = document.getElementById("numeroPc")
const userOut = document.getElementById("numeroUser")
const risultato = document.getElementById("risultato")

btn.addEventListener("click", function () {

    const numeroPc = Math.floor(Math.random() * 6 + 1);
    const numeroUser = Math.floor(Math.random() * 6 + 1);

    if (numeroPc > numeroUser) {
        risultato.innerHTML = ("Mi dispiace ma stavolta ha vinto il computer")

    } else if (numeroPc < numeroUser) {
        risultato.innerHTML = ("Complimenti hai vinto!")
    } else if (numeroPc === numeroUser) {
        risultato.innerHTML = ("Pareggio")
    }

    pcOut.innerHTML = (numeroPc)
    userOut.innerHTML = (numeroUser)

    console.log(numeroPc)
    console.log(numeroUser)


})