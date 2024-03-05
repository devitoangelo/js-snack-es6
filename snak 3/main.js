
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.

let animali = [

    {
        nome:"leone",
        famiglia:"felidi",
        classe:"mammiferi"
    },
    {
        nome:"cane",
        famiglia:"canidi",
        classe:"mammiferi"
    },
    {
        nome:"gallina",
        famiglia:"fasianidi",
        classe:"uccelli"
    },
    {
        nome: "Orso",
        famiglia: "Ursidi",
        classe: "mammiferi"
    },
    {
        nome: "Aquila",
        famiglia: "Accipitridi",
        classe: "Uccelli"
    },
    {
        nome: "Serpente",
        famiglia: "Colubridi",
        classe: "Rettili"
    },


]
console.log(animali);


// Crea un nuovo array con la lista dei mammiferi.
const mammiferi = animali.filter(mammiferi => mammiferi.classe === "mammiferi")

console.log(mammiferi);


