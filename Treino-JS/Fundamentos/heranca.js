Object.prototype.atributo = 'Eu sou o mais velho dessa hierarquia'; // Evite a manipulação desse cara
const avo = { atributo1: 'A' };
const pai = { __proto__: avo, atributo2: 'B' };
const filho = { __proto__: pai, atributo3: 'C' };

console.log(filho.atributo); // Se não tiver nele (atributo) ele procura no seu prototipo seu pai
// Se não tiver no seu pai ele procura no prototipo do seu pai, seu avo
// Se niguem tiver ele procura no Object.prototype, se ele também não tiver, é = undefined
console.log(filho.atributo1, filho.atributo2, filho.atributo3);

console.log(' ');
console.log(' ');

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta) {
        if(this.velocidadeAtual + delta <= this.velocidadeMaxima) {
            this.velocidadeAtual += delta;
        }
        else {
            this.velocidadeAtual = this.velocidadeMaxima;
        }
    },
    status() {
        return `${this.velocidadeAtual}Km/h de ${this.velocidadeMaxima}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 321,// shadowing
}

const fuscao = {
    modelo: 'Preto',
    status() {
        return `${this.modelo}: ${super.status()}`;
        // Assim como eu uso o this para referenciar o meu objeto atual, uso o 'super' para referenciar o prototipo
    }
};

Object.setPrototypeOf(ferrari, carro); // Estabelece uma relação de prototipo entre dois obj
Object.setPrototypeOf(fuscao, carro); 

console.log(ferrari);
console.log(fuscao);

console.log(' ');

ferrari.acelerarMais(100);
console.log(ferrari.status());

fuscao.acelerarMais(50);
console.log(fuscao.status());
