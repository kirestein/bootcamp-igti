var pessoa = {
    nome: "João",
    idade: 40,
    telefone: "(99) 9 9999-9999",
    animaisDeEstimacao: "Cachorro",
};

pessoa.mae = {
    nome: "Maria",
    idade: 64
};

// console.log(pessoa)

salvarDados(pessoa);

function salvarDados(pessoa) {
    console.log(pessoa)
};