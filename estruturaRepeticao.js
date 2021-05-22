

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

var carros = ["Palio", "Tiida", "Sandero", "Santana", "Gol"];

// for (var i = 0; i < carros.length; i++) {
//     console.log(carros[i]);
    
// }

// for (var i = carros.length - 1; i >=0; i--) {
//     console.log(carros[i]);
// }


// var i = 0
// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }

var i = 0;

while (i < carros.length) {
    console.log(carros[i]);
    if (carros[i] === "Sandero") {
        console.log("Econtrei o " + carros[i]);
        break;
    }
    i++;
}

var numeros = [1,2,3,4,5,6,7,8,9,10];
var i = 0;
while (i < numeros.length) {
    //console.log(numeros[i]);
    var num = numeros[i];
    i++;

    if (num % 2 === 0) {
        console.log("o número " + num + " é par");
        continue;
    }else{

    console.log("o número " + num + " é ímpar");
    }
}