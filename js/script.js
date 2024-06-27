//Inizializzo un for che stampa numeri da 1 a 100 compreso e me li restituisce su console
for (let i = 1; i <= 100; i++) {
    //dentro al for aggiungo:

    //se un numero diviso 3 e 5 ha come resto un numero 0 allora ridai FizzBuzz come valore
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
    }
    //altrimenti se solo per 3 ridai Fizz come valore
    else if (i % 3 == 0) {
        console.log('Fizz')
    }
    //altrimenti solo per 5 ridai buzz come valore
    else if (i % 5 == 0) {
        console.log('Buzz')
    }
    console.log(i);
}