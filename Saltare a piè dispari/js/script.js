const listaNumeri = [];


for (let i = 0; i < 6; i++) {
    const userNumber = Number.parseInt(prompt("Inserisci un numero"), 10);

    if (userNumber % 2 === 0) {
        listaNumeri.push(userNumber);
    }

}

console.log(listaNumeri)