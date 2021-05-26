var fs = require("fs");
var funcionario = [];

var nome = ["Alfredo", "Roberto", "José", "Antonio", "Geraldo", "João"];
var salario = [1500, 2000, 3500];
var setor = ["Comercial", "Produção", "Programação"];
var funcionarios = [funcionario1, funcionario2, /*funcionario3, funcionario4, funcionario5, funcionario6*/];

var funcionario1 = {
    nome: nome[0],
    salario: salario[1],
    setor: setor[1]
};
var funcionario2 = {
    nome: nome[1],
    salario: salario[0],
    setor: setor[1]
};

console.log(funcionario1, funcionario2);
// funcionario[0] = {
//     nome: "Alfredo",
//     salario: "R$" + 1500 + ",00",
//     setor: "Produção"
// }

// funcionario[1] = {
//     nome: "Roberto",
//     salario: "R$" + 2600 + ",00",
//     setor: "Vendas"
// }

// funcionario[2] = {
//     nome: "Shiba",
//     salario: "R$" + 3500 + ",00",
//     setor: "Programação"
// }

// function cadastro(funcionario) {
//     return funcionario;
// }

// // function

// console.log(cadastro(funcionario));