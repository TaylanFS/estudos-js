const numeros = [1, 40, 50, 88, 15, 26, 39, 3, 49, 66, 70, 5, 9];

const numeroEmDobro = numeros.map((valor /*, indice, array */) => {
    // console.log(valor, indice, array);
    return valor * 2; //`${valor * 2} é o dobro de  ${valor}`;
});

console.log(numeroEmDobro); 


console.log(' ');
console.log(' ');


// Para cada elemento:
// Retorne apenas uma String com o nome da pessoa (1)
// Remova apenas a chave nome do objeto (2)
// Adicione uma chave id para cada objeto (3)
const pessoas = [
    {nome: 'Taylan', idade: 18},
    {nome: 'PP', idade: 21},
    {nome: 'GGzinho', idade: 22},
    {nome: 'Valdinha', idade: 60},
    {nome: 'Renê', idade: 17},
    {nome: 'Socorro', idade: 63},
    {nome: 'Julia', idade: 18}
];

// (1)
const nomes = pessoas.map((valor) => {
    return valor.nome;
});

// // (2) de várias formas ---->
// // const idades = pessoas.map(valor => valor.idade);

// /* const idades = pessoas.map((valor) => {
//     delete valor.nome;
//     return valor;
// }); */

// /* const idades = pessoas.map((valor) => { 
//     return { idade: valor.idade };
// }); */

const idades = pessoas.map(valor => ({ idade: valor.idade})); // envolvo as chaves com parenteses,
// Pois se não o JS vai entender que as chaves sao da arrow (arrow function encurtada)

// (3)
const adicionaId = pessoas.map((valor, indice) => {
    valor.id = indice; // Meu id vai ser o próprio indice, mas eu poderia inovar
    return valor;
});

console.log(nomes);
console.log(' ');

console.log(idades);
console.log(' ');

console.log(adicionaId);


console.log(' ');
console.log(' '); 


// Perceba que enquanto eu fazia alterações nos meus objetos, fazia no original (referência)
// Se eu não quiser mexer no original, crio uma cópia com spread (...)

// EXEMPLO

const veiculos = [
    {carro: 'Classic', ano: 2010},
    {carro: 'HB20', ano: 2020},
    {carro: 'Sandero', ano: 2017},
    {carro: 'Fuscão', ano: 1975}
];

const adicionaCodigo = veiculos.map((valor, indice) => {
    const copiaVeiculos = {...valor};
    copiaVeiculos.codigo = indice;
    return copiaVeiculos;
});

console.log(adicionaCodigo);
console.log(veiculos);

console.log(' '); 
console.log(' '); 


