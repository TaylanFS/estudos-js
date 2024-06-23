// i = index = índice
for(let i = 0; i <= 10; i++) {
    console.log(`Você foi besta pela ${i} vez`);
}

// Checando se é par
for(let index = 0; index <= 10; index++) {
    let par = index % 2 === 0 ? 'par' : 'ímpar'; // Se o módulo da divisão por 2 restar 0
    console.log(index, par);
}