// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [1, 25, 35, 98, 7, 2, 33, 64, 78, 41, 6, 9, 29, 54, 60, 96];
const numerosPares = numeros.filter((valor) => {
    const copiaNumeros = {...valor};
    return copiaNumeros, valor % 2 === 0;
    
}).map((valor) => {
    return valor * 2;
}).reduce((acumulador, valor) => {
    return acumulador + valor;
});

// [98,  2, 64, 78, 6, 54, 60, 96] pares
// [196,   4, 128, 156, 12, 108, 120, 192] dobro
// 916 soma de tudo
console.log(numerosPares);
console.log(' ');
console.log(numeros);
