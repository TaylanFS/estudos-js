let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);
--num1;
console.log(num1);

console.log(++num1 === num2--); //True pq o ++ foi execultado (increm) antes da comparação,
// e o -- só foi executado (decrem) depois de comparar.
console.log(num1 === num2);