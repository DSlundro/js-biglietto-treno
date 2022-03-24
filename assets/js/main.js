// quanti km vuoi percorrere?
const km_da_percorrere = prompt('Quanti km vuoi percorrere?');
console.log('Hai inserito ' + km_da_percorrere + ' km');

// quanti anni hai?
const età = prompt('Quanti anni hai?');
console.log('Hai inserito ' + età + ' anni');
//prezzo del biglietto - 0.21 € al km
const prezzo_biglietto = km_da_percorrere * 0.21;

// 20% sconto per i minorenni
const prezzo_minorenni = prezzo_biglietto - (prezzo_biglietto * 0.2);

// 40% sconto per gli over 65
const prezzo_over_65 = prezzo_biglietto - (prezzo_biglietto * 0.4);

// prezzo
if (età < 18 && età > 0) {
    console.log(prezzo_biglietto);
    console.log(prezzo_minorenni + ' € prezzo scontato per i minorenni');
} else if (età > 65) {
    console.log(prezzo_biglietto);
    console.log(prezzo_over_65 + ' € prezzo scontato per gli over 65');
} else {
    console.log(prezzo_biglietto);
}

// prezzo con due decimali per indicare i centesimi sul prezzo






