// defineProperties

function Produto(nome, preco, estoque) {

  Object.defineProperties(this, {
		nome: {
			enumerable: true, // mostra a chave 
			value: nome, // valor
			writable: true, // pode alterar
			configurable: true // configurável
		},
		preco: {
			enumerable: true, // mostra a chave 
			value: preco, // valor
			writable: true, // pode alterar
			configurable: true // configurável
		}													
  });
};

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1)); // Vejo as chaves dentro de um array
console.log(p1);