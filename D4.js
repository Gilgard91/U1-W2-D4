/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1,l2){
   return l1 * l2;
}

console.log(area(2,5));



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


function crazySum(num1,num2){
    return num1 === num2 ? (num1 + num2)*3 : num1 + num2; 
}

console.log(crazySum(2,3))

/*function crazySum(num1,num2){
    if (num1 === num2){
        return (num1 + num2)*3;
    } 
        return num1+num2;
    
}

console.log(crazySum(2,3))*/




/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num1){
    return num1 > 19 ? (num1 - 19)*3 : num1 - 19;
}

console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    return n >= 20 && n <= 100 || n == 400
}

console.log(boundary(20));



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(n){
    const EPICODE  = "EPICODE";
    if (n.startsWith(EPICODE)) {
        return n
    } 
        return EPICODE + n 
}

//console.log(epify("555555"))


function epify(n){
    if(typeof n !== "string"){
        return "non è una stringa!";
    }
    const EPICODE  = "EPICODE";
    return n.startsWith(EPICODE) ? n : EPICODE + n;

}

console.log(epify(555555))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(x) {
    return x % 7 === 0 || x % 3 === 0;
  }
  console.log(check3and7());

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(parola){
    let parolaReverse = "";
    for (let i = parola.length - 1; i >= 0; i--){
        parolaReverse += parola.charAt(i) 
       
    } return parolaReverse;
    
}
console.log(reverseString("provaaaa"))



function reverseString(parola){
    let arrParola = parola.split("")
    let arrFinale = []
    for (let i = parola.length - 1; i >= 0; i--){
        arrFinale.push(arrParola[i])
    }   
    return arrFinale.join("")
}

console.log(reverseString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(word1){
    const firstLetter = word1.charAt(0).toUpperCase();
    const rest = word1.slice(1).toLowerCase();

    return firstLetter + rest 
}

console.log(upperFirst("prova"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
