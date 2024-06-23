const nome = 'Taylan';

/* Ou seja, mostrarNota é uma função !! mostrarNota recebe uma função, ou seja,
 chamando mostrarNota() eu chamo a funçao atribuida a ela */

const mostrarNota = function(nota) { 
    switch(Math.floor(nota)) {
        
        case 10:
        case 9:
            console.log(nome + ' É o braaaabo');
            break

        case 8:
        case 7:
            console.log(nome + ' Fez bonito !');
            break

        case 6:
        case 5:
            console.log(nome + ' Você pode fazer melhor !');
            break

        case 4:
        case 3:
            console.log(nome + ' Você não conseguiu de primeira, mas terá mais uma chance !');
            break

        case 2:
        case 1:
        case 0:
            console.log(nome + ' Não foi dessa vez, tente próximo ano !!');
            break

        default:
            console.log(nome + ' Esta nota é inválida !');
                
    }

    console.log('Fim!');
}

mostrarNota(10); 
mostrarNota(9);
console.log();

mostrarNota(8);
mostrarNota(7);
console.log();

mostrarNota(6);
mostrarNota(5);
console.log();

mostrarNota(4);
mostrarNota(3);
console.log();

mostrarNota(2);
mostrarNota(1);
mostrarNota(0);
console.log();

mostrarNota(-1);
mostrarNota(11);