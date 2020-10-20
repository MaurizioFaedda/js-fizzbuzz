// Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:

// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"


// numeri già stabiliti

// for (var i = 1; i <= 100; i++) {
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log('FizzBuzz');
//     } else if (i % 3 == 0) {
//         console.log('Fizz');
//     } else if (i % 5 == 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }


// l'utente inserisce due divisori e vengono stampati tutti i multipli

do {
    var numero1 = parseInt(prompt("Inserisci un divisore"));
    var numero2 = parseInt(prompt("Inserisci un secondo divisore"));
    if ((isNaN(numero1)) || (isNaN(numero2))) {
        alert("Puoi inserire solo numeri. Riprova!")
    }
    i++
} while ((isNaN(numero1)) || (isNaN(numero2)));



for (var i = 1; i <= 100; i++) {
    var divisore1 = i % numero1;
    var divisore2 = i % numero2;
    if ((divisore1 == 0) && (divisore2 == 0)) {
        console.log('FizzBuzz');
    } else if (divisore1 == 0) {
        console.log('Fizz');
    } else if (divisore2 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
