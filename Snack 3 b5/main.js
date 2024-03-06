// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC


// function reverse(stringa) {
//     return stringa(``).reverse(``).join(``)
// }


// const parola = "ciao"
// const parolaInvertita = reverse(parola)

// console.log();



function reversedWord(word) {
    const wordRev = word.split(``).reverse(``).join(``)
    console.log(wordRev);
}

reversedWord(`ciao`)