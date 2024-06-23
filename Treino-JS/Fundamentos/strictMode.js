'use strict'; // Faz você ser obrigado a declarar toda variável que você usa

function imprimir() {
    //x = 3; //Sem a palavra reservada ele joga o 'x' pro global e cria uma var global
    var x = 3; //Com a palavra reservada a var fica no escopo local, logo não dá pra chanar so ela
    console.log(x);   
}

imprimir();
//console.log(x);
