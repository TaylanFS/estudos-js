const numeros = [1, 2, 3, 4, 5];
numeros.pop(); // Tira o ultimo elemento do array
console.log(numeros);

console.log(' '); 

const vogais = ['a', 'e', 'i', 'o', 'u'];
vogais.shift(); // Tira o primeiro elemento do array, ele troca os índices, como eu tirei o 0 agora o 1 é o 0 (desloca <-)
console.log(vogais); 
console.log(vogais[0]); // Demonstração

console.log(' '); 

const frase = ['Eu', 'sou', 'lindo? '];
frase.push('Sim! D+'); // Adiciona um elemento no final do array
console.log(frase);

console.log(' '); 

const presbiteros = ['Gleissin', 'Armando', 'Alessandro'];
presbiteros.unshift('Talvania'); // Adiciona um novo elemento no inicio, e desloca todo os outros -> 
console.log(presbiteros); 

console.log(' '); 

const jogos = ['Paciência', 'Poker', 'Rumikub', 'Resistência', 'Coup', 'Munchkin'];
const separaJogos = jogos.slice(0, -1); // O positivo é da esquerda para direita, negativo é o contrario, o segundo 'parâmetro' não é incluso
console.log(separaJogos); 

console.log(' '); 

const eu = 'Taylan Ferreira da Silva';
const euVireiArray = eu.split(' ');
console.log(euVireiArray);

console.log(' '); 
 
const voce = ['Esse', 'é', 'Você'];
const voceVirouString = voce.join(' ');
console.log(voceVirouString); 
