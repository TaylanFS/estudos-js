// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);

// Armazenando uma arrow function em uma variável
const soma = (a, b) => {
    return a + b;
}
console.log(soma(4,6));

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 2));

const imprimir = a => console.log(a);
imprimir('Que código pequeno não é?!');