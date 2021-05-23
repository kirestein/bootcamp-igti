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

// unshift insere um elemento na primeira posição do array e atualiza os outros indices.
x = carros.unshift("BMW");
// console.log(carros);
// console.log(x);


// Atualizar elemento do indice informado
carros[2] = "Novo Uno";
// console.log(carros);

// remove elemento do índice informado e deixa o buraco no lugar
// delete carros[2];
// console.log(carros);

/*
splice
Primeiro parametro: posição inicial;
segundo parametro: quantos elementos serão removidos a partir da posição inicial;
terceiro e demais paramentros: elementos que serão insreidos a partir da posição inicial;
*/
carros.splice(2, 0, "HRV", "Creta");
// console.log(carros);

carros.splice(2, 1);
// console.log(carros);

var carrosAntigos = ["Brasilia", "Fusca", "Monza"];
var carrosTops = ["Labourguini", "Ferrari", "Porshe"];

// concat concatena 1 array em outro e retorna o novo array formado.
var todosCarros = carros.concat(carrosAntigos, carrosTops);
// console.log(todosCarros);


/* slice cria um novo array sem alterar o array original
Primeiro parametro: posição inicial
Segundo parametro(opcional): posição final (não incluso); 
*/
var novoArray = todosCarros.slice(1);
console.log(novoArray);
console.log(todosCarros);

novoArray = todosCarros.slice(2, 5);
console.log(novoArray);