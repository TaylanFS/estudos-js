// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executada na hora!');
    console.log('Foge do escopo mais abrangente!');
})()

console.log(' ');
console.log(' ');


// Outro exemplo

(function(idade, peso, altura) {

    const sobrenome = 'Ferreira';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Taylan'));
    }

    falaNome();
    console.log(altura, idade, peso);

})(1.76, 18, 76);