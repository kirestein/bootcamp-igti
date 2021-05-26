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
    document.getElementById("paragrafo2").style.display =  "none";

};

function clickBotao2() {
    document.getElementById("paragrafo2").style.display = "block"
};

function ligarLampada( ) {
    document.getElementById("lampada").src = "/img/lampada-ligada.jpg";
};

function desligarLampada( ) {
    document.getElementById("lampada").src = "/img/lampada-desligada.jpg";
};