var numero = 0;
var interval;

function atualizarTexto() {
    
    let mudando = document.getElementsByTagName('h1')[0];
    mudando.innerHTML += ' ' + numero;
    numero++;
}

function iniciar() {
    
    interval = setInterval(atualizarTexto, 1000);
}

function parar() {

    clearInterval(interval);
}


  // Mudando a cor
  // Mudar cor e texto com timer não funcionou 

function mudarCor() { 

    let qualquer1 = document.getElementById('mudar')[0];
    qualquer1.style.color = 'blue';
}

function mudarTexto() {

    let qualquer1 = document.getElementById('mudar');
    qualquer1.innerHTML = 'Novo título e nova cor';
    setTimeout(mudarCor, 3000);
}