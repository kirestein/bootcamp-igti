
// criação da variável para armazenar a palavra
var palavra = "erik";
var palavraInvertida = "";

/*for (var i = 0; i < palavra.length; i++) {
    palavraInvertida += palavra[i];
}*/

for (var i = palavra.length-1; i >= 0; i--) {
    palavraInvertida = palavraInvertida + palavra[i];
    }
    if (palavraInvertida === palavra) {
        console.log("A palavra " + palavra + " é um palindromo.");
    }else if (palavraInvertida !== palavra) {
        console.log("A palavra " + palavra + " não é um palindromo.");
};

// console.log(palavraInvertida);