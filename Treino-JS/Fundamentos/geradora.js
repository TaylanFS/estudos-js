function* geradora1() {
    // Código qualquer
    yield 'Valor 1';
    // Código qualquer
    yield 'Valor 2';
    // Código qualquer
    yield 'Valor 3';
}

const g1 = geradora1();
// console.log(g1);
// console.log(g1.next());
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);


console.log(' ')
console.log(' ')


function* geradora2() {
    // Código qualquer
    yield 'Valor 4';
    // Código qualquer
    yield 'Valor 5';
    // Código qualquer
    yield 'Valor 6';
}

const g2 = geradora2();

for(let valor of g2) {
    console.log(valor);
}


console.log(' ')
console.log(' ')


// Gerador infinito, posso chamar quantas vezes quiser 
function* geradora3() {
    let i = 0;

    while(true) {
        yield i;
        i++; 
    }
}

const g3 = geradora3();

console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
