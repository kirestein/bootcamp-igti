var a = 10;
var b = 10;

if (a > b) {
    console.log("a maior do que b");
}else if (b == a) {
    console.log("a é igual a b");
}else{
    console.log("b maior do que a");
}

var c = 30;
var d = 20;

if (c >= d) {
    console.log("c é maior ou igual a d");
}else{
    console.log("c é menor do que d");
}

if (c != d) {
    console.log("c é diferente de d");
}

var e = 4;
var f = 2;
var g = 3;
var h = 7;

if ((e > f) && (h > g)) {
    console.log("e maior que g");
}
if ((e === f) || (g === h)) {
    console.log("um dos dois ream váilidos");
}

var fruta = "abacaxi";
var valor = 0;

if (fruta === "maçã") {
    valor = 7;
}else if (fruta === "banana") {
    valor = 3;
}else if (fruta === "abacaxi") {
    valor = 4;
}else if (fruta === "mamão") {
    valor = 5;
}else{
    valor = 10;
}

// console.log("o preço da " + fruta + " é igual a R$" + valor + ",00 reais");

// switch

switch (fruta) {
    case "banana":
        valor = 2;
        break;
    case "maçã":
        valor=3;
        break;
    case "abacaxi":
        valor = 4;
        break;
    case "melão":
        valor = 5;
        break;
    case "mamão":
        valor = 5.50;
        break;
    default:
        valor = 10;
        break;
}

console.log("o preço da " + fruta + " é igual a R$" + valor + ",00 reais");

var x = 3;
var y = 2;
var resultado = "";
if (x > y) {
    resultado = "x maior que y";
}else{
    resultado = "senão";
}

console.log(resultado);