const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
const notasBaixas1 = [];
for(let i in notas) {
    if(notas[i] < 7 ) {
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

console.log(' ');

// Com callback
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7;
})

console.log(notasBaixas2);

console.log(' ');

// Callback com arrow
const notasMenorQue7 = nota => nota < 7; // Arrow reduzida
const notasBaixas3 = notas.filter(notasMenorQue7);
console.log(notasBaixas3);  


console.log(' ');
console.log(' ');


function rand(min = 1500, max = 4500) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1 (callback) {
    setTimeout(() => {
        console.log('F1 chegando');
        if(callback) callback();
    }, rand());
}

function f2 (callback) {
    setTimeout(() => {
        console.log('F2 chegando');
        if(callback) callback();
    }, rand());
}

function f3 (callback) {
    setTimeout(() => {
        console.log('F3 chegando');
        if(callback) callback();
    }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Agora é minha vez');
}