const aprovados = ['Taylan', 'Apolo', 'João', 'Sara', 'Beatriz'];

aprovados.forEach(function(elemento, indice) {
    console.log(`${indice + 1}) ${elemento}`);
});

console.log(' ');

aprovados.forEach((nome) => { console.log(nome) });

console.log(' ');

// Foreach por baixo dos panos
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const aprovados2 = ['Taylan', 'Apolo', 'João', 'Sara', 'Beatriz'];

aprovados.forEach2(function(elemento, indice) {
    console.log(`${indice + 1}) ${elemento}`);
});