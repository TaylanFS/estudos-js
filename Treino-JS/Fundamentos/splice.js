// Ordem do que o splice faz
// x.splice(índice, delete, elem1, elem2, elem3...); 

const nomes = ['Taylan', 'Ravi', 'Suiane'];

nomes.splice(2, 1);
console.log(nomes);

console.log(' ');

const numeros = [1, 2, 3, 4];

const numerosRemovidos = numeros.splice(1, 1); // Da pra fazer isso com outros métodos tbm tipo push, pop
console.log(numeros, numerosRemovidos);

console.log(' ');

const vogais = ['a', 'e', 'i', 'o', 'u'];

const vogaisRemovidas = vogais.splice(2, 2); // Removeu do índice 2 em diante
console.log(vogais, vogaisRemovidas);

console.log(' ');


// Explicando o índice negativo (fácil)
//               -5      -4       -3        -2         -1
//                0       1        2         3          4
const merenda = ['Pão', 'Café', 'Leite', 'Requeijão', 'Ovos'];

const removerMerenda = merenda.splice(-2, 2);
console.log(merenda, removerMerenda);

console.log(' ');

const consoantes = ['B', 'C', 'D', 'F', 'G'];

const alteraConsoante = consoantes.splice(1, 0, 'Sou um intruso'); // Adicionei no indice 1 e passei os indices seguintes uma casa pra frente: 1 (antigo) -> 2, 2 -> 3 ...continua 
console.log(consoantes, alteraConsoante);

console.log(' ');

const perifericos = ['Mouse', 'Teclado', 'Monitor', 'Mousepad'];

const substituirPeriferico = perifericos.splice(0, 1, 'Entrei no lugardo mouse');
console.log(perifericos, substituirPeriferico);