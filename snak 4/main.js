// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.


// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

const persone = [
    {
        nome: "Angelo",
        cognome: "Devito",
        eta: 21
    },
    {
        nome: "Mario",
        cognome: "Tortorelli",
        eta: 17
    },
    {
        nome: "Michele",
        cognome: "Rossi",
        eta: 30
    },
    {
        nome: "Stefano",
        cognome: "Lepri",
        eta: 16
    },
    {
        nome: "Ivan",
        cognome: "Verdi",
        age: 15
    }
];


// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
const people = persone.map(persona => {

    const maxAge = persona.eta >= 18 ? "può guidare" : "non può guidare"
    return `${persona.nome} ${persona.cognome} ${maxAge}`
})
console.log(people);