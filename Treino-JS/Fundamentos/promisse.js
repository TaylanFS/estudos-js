let usuarios = ['José', 'João', 'Mateus'];

function inserirUsuario(nome) {
    let promisse = new Promise(function(resolve, reject) {
        setTimeout(() => {
            usuarios.push(nome);
            let error = false;

            if(!error) {
                resolve();
            } else {
                reject({ msg: 'Erro de qualquer coisa' });
            }
        }, 1000);
    })
        return promisse;
};

function listarUsuarios() {
    console.log(usuarios);
};

inserirUsuario('Taylan')
    .then(listarUsuarios)
    .catch((error) => {
        console.log(error)
    });