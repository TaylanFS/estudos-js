// Some todos os numeros (reduce)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const total = numeros.reduce((acumulador, valor, indice, array) => {
//     acumulador += valor;
//     return acumulador;
// }, 0);

const total = numeros.reduce((acumulador, valor, indice, array) => { //Faça com filter, evite isso, (exemplo)
    if(valor % 2 === 0) acumulador.push(valor); //Se eu quiser impar !==
    return acumulador;
}, []);

console.log(total);

