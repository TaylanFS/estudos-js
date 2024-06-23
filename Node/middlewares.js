// middleware patern (chain of responsability)
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1';
    next();
};

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2';
    next();
};

const passo3 = contexto => contexto.valor3 = 'mid3';

const execultar = (contexto, ...middlewares) => {
    const execultarPasso = indice => {
        middlewares && indice < middlewares.length &&
         middlewares[indice](contexto, () => execultarPasso(indice + 1));
    };
    execultarPasso(0);
};

const contexto = {};
execultar(contexto, passo1, passo2, passo3);
console.log(contexto);