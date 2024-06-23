function h2click() {
    console.log('Executando a função');

}

function changeH1() {
    let input = document.getElementById('texto'); // O nome não precisa ser input
    let h1 = document.getElementById('mudarTexto');
    h1.innerText = input.value;

}

function changeH02(nome) {
    // Por exp, aqui o nome é 'nome' kkk
    let h1 = document.getElementById('mudarTexto2');
    h1.innerText = nome.value;
    // Usei o this no html
}

    // Usando outro evento
function changeH03(nome2) {
    // Por exp, aqui o nome é 'nome2' kkk
    let h1 = document.getElementById('mudarTexto3');
    h1.innerText = nome2.value;
    // Usei o this no html
}

function sumir() {
    let h1 = document.getElementById('desapareco');
    h1.style.display = 'none';
}

function dentro(sumirAparecer) {
    sumirAparecer.style.backgroundColor = 'aqua';
}

function fora(sumirAparecer) {
    sumirAparecer.style.backgroundColor = 'black';
}

    //Deu errado
function geraNumero() {
    let gerar = document.getElementById('random');
    Math.round(Math.random() * 10)
    gerar.innerText = gerar.value;
    console.log(geraNumero());
}

//localStorage.setItem('nome', 'Tay'); //Primeiro eu passo a chave entre '', e depois o valor tbm entre ''. Criação/Gravando na memória PASSO 1

let teste = localStorage.getItem('nome'); //Chamando o conteúdo gravado na memória. PASSO 2 / PASSO 3.1 'se quiser ver se apagou da memória'
console.log(teste);

//localStorage.removeItem('nome'); //Tirei  da memória PASSO 3

        //Um teste da aula...
onload = function() {
    let nome = localStorage.getItem('nome');
    let meuH1 = this.document.getElementById('nome');
    meuH1.innerHTML = nome;
}

function atualizar(meuElemento) {
    let valorQualquer = meuElemento.value;
    console.log(valorQualquer); 
    let meuH1 = document.getElementById('nome');
    meuH1.innerHTML = valorQualquer;
    localStorage.setItem('nome', valorQualquer);

}

        //Outro teste...
// let a = {myName: 'Tay', nota: 9.5}; //PASSO 1, depois de feito comenta e segue.
// localStorage.setItem('aluno', JSON.stringify(a));

let a = localStorage.getItem('aluno');
console.log(JSON.parse(a));

localStorage.clear() //Limpa toda a memória



