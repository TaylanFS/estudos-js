const notas = [7, 8, 9, 10];

for(let indice in notas) {
    console.log(indice, notas[indice]); //O indice é a posição dentro do array, partindo do 0.
}

const pessoa = {
    nome: 'Taylan',
    sobrenome: 'Ferreira',
    idade: 18,
    peso: 78    
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}