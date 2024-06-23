let contador = 1;

while(contador <= 10) {
    //Esse símbolo `${}` serve pra concatenar, se ele for usado, use crase `` . 
    //O que está dentro do ${} é o valor, var, let, const. O que está fora é string.
    console.log(`contador = ${contador}`) 
    contador++;
}

console.log(' ');


for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`);
}

console.log(' ');


const notas = [6.5, 8, 2.5, 7.5, 10];
for(let n = 0; n < notas.length; n++) {
    console.log(`n = ${notas[n]}`);
}