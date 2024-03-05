// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

let automobili = [

    {
        marca: "Ferrari",
        modello: "La Ferrari",
        alimentazione: "Benzina"
    },
    {
        marca: "Aston Martin",
        modello: "Vulcan",
        alimentazione: "Benzina"
    },
     {
        marca: "Mercedes",
        modello: "a 1",
        alimentazione: "Disel"
    },
    {
        marca: "Bmw",
        modello: "m 2",
        alimentazione: "Disel"
    }, 
    {
        marca: "McLaren",
        modello: "P1",
        alimentazione: "Benzina"
    }, 
    {
        marca: "Toyota",
        modello: "Aygo X",
        alimentazione: "Metano"
    }, 
    {
        marca: "Lamborghini",
        modello: "Aventator",
        alimentazione: "Benzina"
    }, 
    {
        marca: "Bugatti",
        modello: " Chiron",
        alimentazione: "Benzina"
    }, 
    {
        marca: "Tesla",
        modello: "Model x",
        alimentazione: "Elettrica"
    }, 
    {
        marca: "Ford",
        modello: "Ford gt",
        alimentazione: "Benzina"
    },
]



// 1 step
const petrol = automobili.filter((auto) => {return auto.alimentazione === `Benzina`})

console.log(petrol);


//oppure

// const petrol = automobili.filter(auto => auto.alimentazione === `Benzina`)

// 2 step
const disel = automobili.filter((auto) => {return auto.alimentazione === `Disel`})

console.log(disel);

//oppure
// const petrol = automobili.filter(auto => auto.alimentazione === `Disel`)

// 3 step
const eco = automobili.filter(auto => auto.alimentazione !== "Benzina" && auto.alimentazione !== "Disel" )

console.log(eco);
//oppure
// const petrol = automobili.filter(auto => auto.alimentazione !== `Disel` && auto.alimentazione !== `Disel`)