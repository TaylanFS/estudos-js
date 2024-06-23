// new Object -> Object.prototype
const objA = {
  chaveA: 'A'
  // __proto__: Object.prototype
};

const objB = {
  chaveA: 'B'
  // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

console.log(' ');
console.log(' ');


function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
};

Produto.prototype.desconto = function(percentual){
  this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
  this.preco = this.preco + (this.preco * (percentual / 100));
};

const produto1 = new Produto('Blusa', 70);
console.log(produto1);

const produto2 = {
  nome: 'Caneca',
  preco: 15
};
Object.setPrototypeOf(produto2, Produto.prototype);
produto2.aumento(10);
console.log(produto2);

const produto3 = Object.create(Produto.prototype);
produto3.nome = 'Bola';
produto3.preco = 150;
produto3.desconto(50);
console.log(produto3);

console.log(' ');
