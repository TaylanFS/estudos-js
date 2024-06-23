const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
];

console.log(produtos.filter((p) => {
    return false;
    // if(produtos.preco > 2000 && produtos.fragil === true ) {
    //     return produtos.preco, produtos.fragil;
    // }
}));

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;
console.log(produtos.filter(caro).filter(fragil));

console.log(produtos.filter(caro).filter(fragil));


console.log(' ');
console.log(' ');


// Retorne os numeros maiores que 10
const numeros = [12, 0, 52, 6, 97, 11, 10, 13, 5, 7, 20, 9, 17, 2];

const maioresQue10 = numeros.filter((valor, indice, array) => {
   // console.log(valor, indice, array);
    return valor >= 10;
});

console.log(maioresQue10);


console.log(' ');
console.log(' ');


// Retorne os nomes com 5 letras ou mais 
// Retorne os nomes com mais de 50y
// Retorne os nomes cujas terminações sejam em 'A'

const pessoa = [
    {nome: 'Taylan', idade: 18},
    {nome: 'PP', idade: 21},
    {nome: 'GGzinho', idade: 22},
    {nome: 'Valdinha', idade: 60},
    {nome: 'Renê', idade: 17},
    {nome: 'Socorro', idade: 63},
    {nome: 'Julia', idade: 18}
];

const pessoaNomeGrande = pessoa.filter((obj) => {
    return obj.nome.length >= 5;
});

console.log(pessoaNomeGrande);


console.log(' ');


const pessoaMaisDeCinquenta = pessoa.filter((obj) => {
    return obj.idade >= 50;
});

console.log(pessoaMaisDeCinquenta);


console.log(' ');


const nomeTerminaComA = pessoa.filter((obj) => {
    return obj.nome.toLowerCase().endsWith('a');
});

console.log(nomeTerminaComA);