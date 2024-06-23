
// Usando uma função com nome
function dobro(x) {
    console.log(2 * x);
}

dobro(4);

// Usando uma função anônima   
let calculaDobro = function(y) {
    console.log(2 * y);
}

calculaDobro(6);

// Usando arrow function
// Se tiver apenas um argumento não precisa de parenteses
let qualDobro = (z) => {
    console.log(2 * z);
}

qualDobro(8);