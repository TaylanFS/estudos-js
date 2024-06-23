// Uma função callback é uma função passada a outra função como argumento,
// que é então invocada dentro da função externa para completar algum tipo de rotina ou ação.
// Em outras palavras, uma função callback é uma função que é executada após a conclusão de uma operação assíncrona ou quando um evento é acionado.

// Por exemplo, a função setTimeout() em JavaScript é uma função assíncrona que recebe dois parâmetros: uma função callback e um tempo em milissegundos.
// A função callback é executada após o tempo especificado ter decorrido. Aqui está um exemplo:

setTimeout(function() {
    console.log('Esta é uma função callback!');
  }, 1000);

  
//   Nesse exemplo, a função setTimeout() recebe uma função anônima como argumento e a chama após um segundo.
// A função anônima é definida como um argumento para setTimeout() e não precisa ser armazenada em uma variável.