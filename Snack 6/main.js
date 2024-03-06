// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti




// Generare numeri random al posto degli 0 nelle 
function NumeroCasuale(min, max) {

    return Math.floor(Math.random() * 100);


}

// Creare un array di oggetti di squadre di calcio.
let squadreDiCalcio = [
    { nome: "Juventus", punti: NumeroCasuale(0, 100), falliSubiti: NumeroCasuale(0, 100) },
    { nome: "Milan", punti: NumeroCasuale(0, 100), falliSubiti: NumeroCasuale(0, 100) },
    { nome: "Inter", punti: NumeroCasuale(0, 100), falliSubiti: NumeroCasuale(0, 100) },
    { nome: "Roma", punti: NumeroCasuale(0, 100), falliSubiti: NumeroCasuale(0, 100) },
    { nome: "Napoli", punti: NumeroCasuale(0, 100), falliSubiti: NumeroCasuale(0, 100)}

]
console.log(squadreDiCalcio);


// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
let falliSubitiPunti = squadreDiCalcio.map(function({nome, ...rest}){

return rest
})



console.log(falliSubitiPunti);