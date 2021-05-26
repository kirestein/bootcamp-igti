console.log(process.argv)

var operacao = "";
var num1 = 4;
var num2 = 3;
var resultado = 0;

if (operacao === "soma") {
    resultado = num1 + num2;
}else if (operacao === "subtração") {
    resultado = num1 - num2;
}else if (operacao === "multiplicacao") {
    resultado = num1 * num2;
}else if (operacao === "divisao") {
    resultado = num1 / num2;
}else if (operacao === "resto") {
    resultado = num1 % num2
} else if (operacao === "porcentagem") {
    resultado = num1 * num2 / 100;
}else if (operacao === "potencia") {
    resultado = num1 ** num2;
}

console.log("O resultado da " + operacao + " é " + resultado);