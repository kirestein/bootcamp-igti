for (let numero = 2; numero < 1000; numero++) {
    let numeroPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
        if(numero % divisor === 0) {
            numeroPrimo = false;
        }
        
    }
    
    if (numeroPrimo) {
        console.log("O número " + numero + " é primo!");
    }
}