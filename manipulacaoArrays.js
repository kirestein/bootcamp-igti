var carros = ["Tiida", "Gol", "Uno", "Sandero", "Onix", "Celta", "Spin"];

// console.log(carros[carros.length-1]);

// pop remove o último elemento do array
var carro = carros.pop();

// console.log(carros);
// console.log(carro);

// push adiciona um elemento no fim do array
var x = carros.push("Ká");
// console.log(carros);
// console.log(x);

// shift remove o primeiro elemento do array e atualiza os outros itens;
carro = carros.shift();
// console.log(carros);
// console.log(carro);

// unshift insere um elemento na primeira posição do array
x = carros.unshift("BMW");
// console.log(carros);
// console.log(x);