const pai = { nome: 'Pedro', cabelo: 'Preto' };

const filha1 = Object.create(pai); // Já cria o objeto filha tendo como prototipo o obj 'pai'
filha1.nome = 'Ana';
console.log(filha1.cabelo);

console.log(' ');

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
});

console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.cabelo}`) 

console.log(' ');

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

console.log(' ');

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
};