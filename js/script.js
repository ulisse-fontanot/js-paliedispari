var paridis = prompt("pari o dispari?");
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5!"));
var numeroComputer = generaRandom(1,5);
var somma = numeroUtente + numeroComputer;
console.log("Il tuo tiro: " + numeroUtente);
console.log("Il tiro del computer: " + numeroComputer);
console.log("Somma: " + somma);
console.log("Hai detto: " + paridis);

if (paridis == "pari" && somma%2 == 0) {
  console.log("hai vinto");
} else if (paridis == "dispari" && somma%2 !== 0) {
  console.log("hai vinto");
} else {
  console.log("hai perso");
}


function generaRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
