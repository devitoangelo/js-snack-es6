// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]



let arryOriginale = ["pippo", "PLUTO", "Paperino"]

let arrayModificato = arryOriginale.map(parola => {

    return parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase()

})

console.log(arrayModificato);