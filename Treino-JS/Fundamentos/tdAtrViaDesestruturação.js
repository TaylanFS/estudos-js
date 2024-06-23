const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const [primeiro, segundo,...pegarResto] = numeros; // rest operator. rest e spread tem a mesma sintaxe
console.log(primeiro, segundo);
console.log(pegarResto);
