// Literal
let taylan = {
    nome: 'Taylan',
    idade: 18
};

console.log(taylan.nome); // Duas formas de acessar
console.log(taylan['idade']);

console.log(' ');

// Construtor 
const taylan2 = new Object();
taylan2.altura = 1.76;
taylan2.peso = 76;

console.log(taylan2);

console.log(' ');

const pessoa = new Object();
pessoa.idade = 18;
pessoa.falarIdade = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa.falarIdade());
