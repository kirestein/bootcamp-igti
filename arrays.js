var carros = ["Tiida", "Gol", "Uno"];
console.log(carros);

var primeiroCarro = carros[0];
var segundoCarro = carros[1];
var terceiroCarro = carros[2];

console.log("primeira posição " + primeiroCarro);
console.log("segunda posição " + segundoCarro);
console.log("terceira posição " + terceiroCarro);

carros[2] = "Onix";

console.log(carros[2]);
console.log(terceiroCarro);

console.log("Tamanho do array é " + carros.length);

console.log(carros[carros.length-1]);

carros[3] = "Sandeiro";

console.log(carros.length);

carros[carros.length] = "Pálio";

console.log(carros);

carros.push("Santana");

console.log(carros);