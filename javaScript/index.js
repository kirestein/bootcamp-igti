document.write("texto qualquer");
console.log("Hello Word!");

setTimeout(function() {
    console.log("passou 1 segundo")
}, 1000);

setTimeout(function() {
    console.log("passou 2 segundo")
    // document.write("texto qualquer");
}, 2000);

function clickBotao() {
    // document.getElementById("paragrafo2").innerHTML = "Texto alterado com sucesso";
    // document.getElementById("paragrafo2").style.display =  "none";

    document.getElementsByClassName("paragrafo")
    for (let i = 0; i < document.getElementsByClassName("paragrafo").length; i++) {
        document.getElementsByClassName("paragrafo")[i].style.color = "blue";
        document.getElementsByClassName("paragrafo")[i].style.fontWeight = "bold";
    }

};

function clickBotao2() {
    // document.getElementById("paragrafo2").style.display = "block"
    var botoes = document.getElementsByTagName("button");
    var i = 0;
    while (i < botoes.length) {
        botoes[i].style.fontSize = "2rem";
        i++
    }
};

function ligarLampada( ) {
    document.getElementById("lampada").src = "/img/lampada-ligada.jpg";

    
};

function desligarLampada( ) {
    document.getElementById("lampada").src = "/img/lampada-desligada.jpg";
};

var quantidadeElementos = 0;

function adicionarElementos() {
    var elemento = document.createElement("P");
    elemento.innerHTML = "elemento " + quantidadeElementos;

    quantidadeElementos++;

    document.getElementById("div-elementos").appendChild(elemento);
};

function removerElementos() {
    var filhos = document.getElementById("div-elementos").childNodes;
    var size = filhos.size;
    for (var i = 0; i < size; i++) {
        document.getElementById("div-elementos").removeChild(filhos[0]);
    }
};