let usuarios = ['José', 'João', 'Mateus'];

function inserirUsuario(nome, callback) {
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000);
};

function listarUsuarios() {
    console.log(usuarios);
};

inserirUsuario('Taylan', listarUsuarios);