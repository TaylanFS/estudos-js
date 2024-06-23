function novoAluno(nome, idade) {
    return { nome, idade};
};

let alunos = [
    novoAluno('Pedro', 15), 
    novoAluno('Tiago', 16),
    novoAluno('João', 17),
    novoAluno('André', 18)
]

function maisDe18(aluno) {
    return aluno.idade > 17;
}

function menosDe18(aluno) {
    return aluno.idade < 18;
}

let alunosMais18 = alunos.filter(maisDe18);

console.log(alunosMais18);
