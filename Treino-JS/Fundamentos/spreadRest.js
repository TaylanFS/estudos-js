const nomes = ['Davi', 'Bruno', 'Atila'];
const recebeNomes = nomes;
// Criou uma referência, se alterar nomes, altera recebeNomes, e vice-versa

nomes.pop();
console.log(nomes);
console.log(recebeNomes);

console.log(' ')

// Agora crio uma cópia com spread/rest (pq é a mesma sintáxe para os dois)

const pastores = ['Valdinha', 'Zé Francisco', 'Benny'];
const recebePastores = [...pastores];

pastores.pop();
console.log(pastores);
console.log(recebePastores);