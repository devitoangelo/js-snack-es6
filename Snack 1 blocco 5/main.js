// Crea un array di 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


let zucchina = [

    {
        varieta: "zucca romanesca",
        peso: 45,
        lunghezza: 20,
    },
    {
        varieta: "zucca trombetta ",
        peso: 25,
        lunghezza: 25,
    },

    {
        varieta: "zucca costata",
        peso: 50,
        lunghezza: 18,
    },

    {
        varieta: "zucca crookneck",
        peso: 15,
        lunghezza: 15,
    },

    {
        varieta: "zucca zucchini rampicante",
        peso: 20,
        lunghezza: 10,
    },


]
// Calcola quanto pesano tutte le zucchine.
let pesototale = 0
const peso = zucchina.filter(peso =>

    pesototale += peso.peso
    
)

console.log("il peso totake delle zucchine e "+ pesototale);

