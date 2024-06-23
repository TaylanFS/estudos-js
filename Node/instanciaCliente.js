contadorA = require('./instanciaUnica');
contadorB = require('./instanciaUnica');

console.log('');

contadorC = require('./instanciaNova')();
contadorD = require('./instanciaNova')();

console.log('');

contadorA.incrementar();
contadorA.incrementar();
console.log(contadorA.valor, contadorB.valor);

console.log('');


contadorC.incrementar();
contadorC.incrementar();
console.log(contadorC.valor, contadorD.valor);