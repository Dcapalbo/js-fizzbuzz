// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100

// creo il ciclo for e la relativa variabile per i numeri
for (var i = 0; i < 100; i++) {
  var numero = i + 1;

  //pongo le condizioni da rispettare

  if (numero % 3 == 0 && numero % 5 == 0) {
    console.log("FizzBuzz"); // Per i numeri multipli di 3 che di 5 il programma stampa "FizzBuzz"
  }
  else if (numero % 5 == 0) {
    console.log("Buzz"); // per i numeri multipli di 5 il programma stampa "Buzz"
  }
  else if (numero % 3 == 0) {
    console.log("Fizz"); // per i numeri multipli di 3 il programma stampa “Fizz”
  }
  else {
    console.log(numero); // per gli altri numeri il programma stampa la variabile numero
  }
}
