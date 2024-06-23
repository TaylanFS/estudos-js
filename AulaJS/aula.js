alert('Olá, amigo!');

            // Function Soma 
function soma() {
    var e1 = parseInt(document.getElementById('v1').value);
    var e2 = parseInt(document.getElementById('v2').value);
    document.getElementById('resSoma').innerHTML =
     'Resposta = '+ (e1 + e2);
}

            // Function Dividir 
function dividir() {
    var e1 = parseInt(document.getElementById('v1').value);
    var e2 = parseInt(document.getElementById('v2').value);
    document.getElementById('resDividir').innerHTML =
     'Resposta = '+ (e1 / e2);
}

            // Function Multiplicar 
function multiplicar() {
    var e1 = parseInt(document.getElementById('v1').value);
    var e2 = parseInt(document.getElementById('v2').value);
    document.getElementById('resMultiplicar').innerHTML =
     'Resposta = '+ (e1 * e2);
}

           // Function Subtrair 
function subtrair() {
    var e1 = parseInt(document.getElementById('v1').value);
    var e2 = parseInt(document.getElementById('v2').value);
    document.getElementById('resSubtrair').innerHTML =
     'Resposta = '+ (e1 - e2);
}

            // Função trocar lampada 
// function mudarlampada() {
   
//     var image = document.getElementById('lampada');
//     if (image.src.match('off')) {
//         image.src = 'on.png';
//     }
//     else {
//         image.src = 'off.png';
//     }

// }