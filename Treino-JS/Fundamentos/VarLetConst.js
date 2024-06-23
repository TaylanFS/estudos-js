// let e const tem um escopo local, ele só existe dentro de onde você criou
// diferente co var que tem escopo global 
{
var um = 1;
let dois = 2;
const tres = 3;

console.log(dois);
console.log(tres);
}

console.log(um);
// console.log(dois); //dois e tres so aparecem dentro do bloco de código
// console.log(tres); 

