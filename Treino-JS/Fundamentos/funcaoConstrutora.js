function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo ptivado
    let velocidadeAtual = 0;

    // Método público
    this.acelerar = () => {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        }
        else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // Método público
    this.getVelocidadeAtual = () => {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());