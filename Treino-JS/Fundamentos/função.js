 //Função sem return
function imprimirSoma(a, b) {

    console.log(a + b);

}
imprimirSoma(7, 3);

 //Função com return 
function soma (a, b = 1) {
    return a + b;
}
console.log(soma(2, 8));

   