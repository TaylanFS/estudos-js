// Função factory retorna um object

// Factory simples

function criarPessoa() {
    return {
        nome: 'Taylan',
        sobrenome: 'Ferreira',
        idade: 18
    };
}

console.log(criarPessoa());

console.log(' ');
console.log(' ');

// Outro exemplo

function criarProduto(name, preco) {
    return {
        name, // Poderia chamar name: name, mas tbm dá pra ser assim
        preco, // Poderia chamar preco: preco, mas tbm dá pra ser assim
        desconto: 0.1
    };
}

console.log(criarProduto('Notebook', 4000));
console.log(criarProduto('iPhone', 3500));