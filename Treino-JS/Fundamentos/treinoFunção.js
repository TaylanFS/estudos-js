function simples() {
    console.log('Simples');
}
simples()   

function gritar(grito) {
    return grito.toUpperCase() + '!!!';
}
const x = gritar('Bom dia');
console.log(x);

            // Uma função dentro de outra é possível e é bem usado 
// function menu() {

//     function esconderMenu() {

//     }
//     esconderMenu()
// }

        // Atibuindo uma função (anônima) a uma variável 
        // obs não precisa ser uma função anônima, ela pode ter nome 
        // Mas via de regra, use a anônima do lado direito da expressão 
 const a = 3;
 const multiplicar = function(a, b) {
    return a * b;
 }
 