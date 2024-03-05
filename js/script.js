// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
// secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Prezzo del biglietto per km
const priceForKm = 'INFO: Il prezzo del biglietto è € 0.21 al km, se non intende pagare potrebbe essere soggetto ad una contravvenzione';
console.log(priceForKm);
alert (priceForKm);

// Creare un formattatore per i prezzi
const formatter = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
});

// Inserire la distanza percorsa dall'utente
const kmTravelled = parseInt(prompt('Quanti chilometri devi percorrere?'));
console.log(kmTravelled);

// Determinare il prezzo del biglietto in base ai km percorsi
const priceTicketStandard = 0.21 * kmTravelled;
console.log(formatter.format(priceTicketStandard));

// Domandare al cliente la sua età per un eventuale sconto
const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge)

// Creare la variabile messaggio all'utente
let userMessage;

// Creare la variabile prezzo finale del biglietto
let priceTicketFinal = parseInt(priceTicketStandard);

// Determinare il prezzo del biglietto in base allo sconto per età
if(userAge < 18) {
    priceTicketFinal = (priceTicketStandard - ((priceTicketStandard * 20) / 100)).toFixed(2);
    userMessage = 'Il tuo biglietto con sconto minorenni è di'; 
} else if (userAge > 65) {
    priceTicketFinal = (priceTicketStandard - ((priceTicketStandard * 40) / 100)).toFixed(2);
    userMessage = 'Il tuo biglietto con sconto anziani è di';
} else {
    priceTicketFinal = (priceTicketStandard);
    userMessage = 'Il tuo biglietto è di';
}

console.log(formatter.format(priceTicketFinal));

console.log(userMessage + ' ' + formatter.format(priceTicketFinal));

// Output del prezzo finale
document.getElementById('user-message').innerHTML = userMessage + ' ' + formatter.format(priceTicketFinal);