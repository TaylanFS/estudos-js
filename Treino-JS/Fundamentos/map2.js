const numrs = [1, 2, 3, 4, 5];

let resultado = numrs.map(function(elemento) {
    return elemento * 2;
});

console.log(resultado);

console.log(' ');

const soma10 = elemento => elemento + 10;
const triplo = elemento => elemento * 3; 
const paraDinheiro = elemento => ` R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`;

resultado = numrs.map(soma10).map(triplo).map(paraDinheiro);

console.log(numrs, resultado);

// Segundo o Leo: ' Map é um for com propósito'
