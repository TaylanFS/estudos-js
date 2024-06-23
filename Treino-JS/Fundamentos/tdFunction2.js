// Crie uma função que verifique se a foto está em retrato ou em paisagem 
function verImagem(largura, altura) {
    if(largura > altura){
        return 'Paisagem';
    }
    else {
        return 'Rerato';
    };
};

console.log(verImagem(1080, 1920));