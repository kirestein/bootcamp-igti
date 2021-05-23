var fs = require("fs");
var nomeArquivo = "meuArquivo.txt"

fs.writeFile(nomeArquivo, "Um texto qualquer", function(err) {
    if (err !== null) {
        console.log(err);
    }else{
        console.log("arquivo escrito com sucesso");
            // para adicionar no arquivo
        fs.appendFile(nomeArquivo, "\nnova linha no texto", function(err) {
            if (err) {
                console.log(err);
            }else{
                fs.readFile(nomeArquivo, "utf-8", function(err, data) {
                if (err) {
                console.log(err);    
                }else{
                    console.log(data);
                }
                });
            }
        });

        
    }
});