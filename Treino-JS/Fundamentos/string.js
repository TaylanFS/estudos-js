const nome = 'Taylan';

console.log(nome.charAt(0)); //Função/método pega a posição desejada 
console.log(nome.charAt(2)); //Outro exemplo
console.log(nome.indexOf('y')); //Pega a posição de 'y' dentro da const nome
console.log(nome.substring(1)); //Pega a informação do índice 1 em diante, dentro da const nome
console.log(nome.substring(0, 3)); //Pega do índice 0 até o 3 
console.log('Meu nome é '.concat(nome).concat(' :)')); //Outra forma de concatenar sem ser com o +
console.log(nome.replace('T', 'K')); //Troca a letra ou tiver número por outro algarismo
console.log('Taylan, Suiane, Ravi'.split(',')); //Transforma em array
