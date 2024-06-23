const sequencia = {
	_valor: 1,
	get valor() { return this._valor++  },
	// set valor(valor) { return this._valor = valor }
    set valor(valor) {
        if(valor > this.valor) {
            this._valor = valor;
        };
    }
};

console.log(this);
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
