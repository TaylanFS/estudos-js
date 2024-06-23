function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 =  trabalho1 && trabalho2;
//  const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor / 'ou' exclusivo
    const comprarTv32 = trabalho1 != trabalho2; // outra maneira de 'ou' exclusivo
    const manterSaudavel = !comprarSorvete; // operador unário  

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}   
   /* criação de objeto inteligente, não precisa botar o nome da chave e depois o valor
    assim ele ja cria o objeto no qual o nome da constante é a chave do objeto e o valor
    é o próprio valor que é o resultado das operações*/
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));