// No objeto você cria uma chave que é o identificador, e depois passa um valor
var aluno = {nome: 'Taylan', nota: 9};
console.log(aluno.nome); // Posso acessar a chave usando um '.' e o nome da chave/identificador
console.log(aluno.nota);
console.log(aluno["nome"]); // Posso acessar como se fosse um array, com colchetes, mas coloca a chave entre " "
console.log(aluno['nota']);

const produto = {}; //Crio uma constante chamada produto, que recebe um objeto {}
produto.nome = 'Iphone'; //O produto tem um nome (Iphone)
produto.valor = 1500; //O produto tem um valor (1500)
console.log(produto);

const produto2 = { //Outra forma de criar objeto
    nome: 'Camiseta',
    valor: 29,
}
console.log(produto2);


function criarPessoa(nome, sobrenome, idade){ 
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa1 = criarPessoa('Taylan', 'Ferreira', 18); // Argumento é o valor passado para o parâmetro
console.log(pessoa1);