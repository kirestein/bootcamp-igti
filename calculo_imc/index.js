function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var imc = peso / (altura * altura);
    var imcResultado = "";

    if (imc < 18.5) {
        imcResultado = "Abaixo do normal";
    }else if ((imc >= 18.5) && (imc < 24.9)) {
        imcResultado = "Normal";
    }else if ((imc >=24.9) && (imc < 30)) {
        imcResultado = "Sobrepeso";
    }else if ((imc >= 30) && (imc < 40)) {
        imcResultado = "Obesidade";
    }else{
        imcResultado = "Obesidade Grave";
    }
    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc;
    document.getElementById("descricaoResultado").innerHTML = "Seu peso indica que você está na faixa: " + imcResultado;
}

function limpar() {
    document.getElementById("altura").value = 0;
    document.getElementById("peso").value = 0;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("descricaoResultado").innerHTML = "";
}

function pesoIdeal() {
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = 21.7;
    var peso = imc * (altura ** 2);
    console.log(peso);
}