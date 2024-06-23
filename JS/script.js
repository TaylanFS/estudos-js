// // // NÃO USAR O LIVE SERVER, POIS, O CONSOLE BUGA!!
// // // (AQUI NO JS)

// // // Transformei string em number (parseInt e parseFloat)

// // // var a = "1";
// // // var b = "2";
// // // var c = parseInt(a) + parseInt(b);
// // // console.log(c);

// // // OPERADORES ARITIMÉTICOS

// // // Soma

// // // var a = 2;
// // // var b = 2;
// // // var c = a + b;
// // // console.log(c);

// // // Subtração

// // // var a = 2;
// // // var b = 2;
// // // var c = a - b;
// // // console.log(c);

// // // Multiplicação

// // // var a = 2;
// // // var b = 2;
// // // var c = a * b;
// // // console.log(c);

// // // Divisão

// // // var a = 2;
// // // var b = 2;
// // // var c = a / b;
// // // console.log(c);

// // // Módulo (O que sobra da divisão)

// // // var a = 2;
// // // var b = 2;
// // // var c = a % b;
// // // console.log(c);

// // Incremento
// // var a = 1;
// // a++;
// // console.log(a);
// // var a = 1;
// // var b = a++;
// // var b = ++a;
// // console.log(b);

// // Decremento
// // var a = 1;
// // a--;
// // console.log(a);
// // var a = 1;
// // var b = a--;
// // var b = --a;
// // console.log(b);

// // // VALORES BOOLEANOS

// // // False

// // // var a = 2;
// // // var b = 4;
// // // var c = a > b;
// // // console.log(c);

// // // True

// // // var a = 1;
// // // var b = 2;
// // // var c = a < b;
// // // console.log(c);

// // // OPERADORES COMPARATIVOS

// // // Igual a

// // // var a = 2;
// // // var b = 2;
// // // var c = a == b;
// // // console.log(c);

// // Diferente de

// // var a = 2;
// // var b = 2;
// // var c = a != b;
// // console.log(c);

// // // Igual absoluto, confere os valores e o tipo (string, number e etc)

// // // var a = "1";
// // // var b = "1";
// // // var c = a === b;
// // // console.log(c);

// // // Diferente absoluto

// // // var a = 2;
// // // var b = 2;
// // // var c = a !== b;
// // // console.log(c);

// // // Maior ou igual

// // // var a = 10;
// // // var b = 5;
// // // var c = a >= b;
// // // console.log(c);

// // // Menor ou igual

// // // var a = 10;
// // // var b = 20;
// // // var c = a <= b;
// // // console.log(c);

// // // OPERADORES LÓGICOS

// // // && - "E"

// // // var a = true;
// // // var b = false;
// // // var c = a && b;
// // // console.log(c);

// // // Aqui acima ele diz:"a" é true e "b" tbm?; o que da false
// // // Se "b" fosse true, o resultado era true
// // // Só é true se os dois forem, se um ou os dois derem false, vai da false

// // // var idade = 22;

// // // var maior20 = idade >= 20;
// // // var menor18 = idade <= 18;
// // // var entre = menor18 && maior20;

// // // console.log("Idade ", idade);
// // // console.log("É maior de 20? ", maior20);
// // // console.log("É menor de 18? ", menor18);
// // // console.log("Está entre 18 e 20? ", entre);

// // // || - "OU"

// // // var idade = 15;

// // // var menor12 = idade <= 12;
// // // var maior60 = idade >= 60;
// // // var direito = menor12 || maior60;

// // // console.log("Idade", idade);
// // // console.log("Tem 12 anos ou menos?", menor12);
// // // console.log("Tem 60 ou mais?", maior60);
// // // console.log("Tem direito?", direito);

// // // ! - "Negação"

// // // var a = true;
// // // var b = false;
// // // console.log(!a);

// // // ALERT e PROMPT

// // // var nome = prompt("Qual o seu nome?");
// // // alert("Bom dia," + nome);
// // // coloquei o "+" e concatenou, deu bom!

// // // var numero = parseInt(prompt("Digite um número"));
// // // var dobro = numero + numero;
// // // alert("O dobro de " + numero + " é " + dobro);
// // // O prompt retorna uma String, transformar prompt em string!

// // // CONDICIONAIS

// // // // IF - "Se" / ELSE - "Se não" / "{}" Bloco de cmd quando tem mais de uma linha

// // // var idade = 17;

// // // if (idade >= 35) {
// // //     console.log("pode");
// // //     console.log("Qual o seu pedido?");
// // // }
// // // else if (idade >= 18) {
// // //     console.log("pode");
// // //     console.log("Mostre a sua identidade");
// // // }

// // // else {
// // //     console.log("Não pode");
// // //     console.log("Volte futuramente");
// // // }

// // // SWITCH

// // // var nota1 = 10;
// // // var nota2 = 6;

// // // var media = (nota1 + nota2) / 2;
// // // var rendimento = ""

// // // if (media >= 8) {

// // //     rendimento = "Ótimo";

// // // }

// // // else if (media >= 6) {

// // //     rendimento = "Bom";
// // // }

// // // else {
// // //     rendimento = "Regular";
// // // }

// // // console.log(media);
// // // console.log(rendimento);

// // // switch(rendimento) {

// // //     case "Ótimo" :
// // //         console.log("Parabéns, você é um ótimo aluno!")
// // //     break;

// // //     case "Bom" :
// // //         console.log("Você pode melhorar!")
// // //     break;

// // //     case "Regular" :
// // //         console.log("Estude mais!")
// // //     break;

// // //     default :
// // //         console.log("Houve algum erro :/")
// // //     break;
// // // }

// // // OPERADOR TERNÁRIO "?" Logo após a interrogação vem o valor da condição ser verdadeira

// // // var idade = 19;

// // // var pode = idade >= 18 ? true : false;
// // // console.log(pode);
// // // idade >= 18 ? console.log("Pode") : console.log("Não pode");

// // // REPETIÇÃO - FOR E WHILE
// // // Se não incrementar vai loopar eternamente

// // var numero = 1;

// // for (var vez = 0; vez < numero; vez++){
// // console.log("Testando o for pela " + vez + " vez");
// // }

// // var numero = 0;

// // while (numero <= 10 ) {

// //     console.log("Número " + numero);
// //     numero++;

// // }
// // console.log("Acabou");

// // // ARRAY - É como se fosse uma sequencia de variaveis todas juntas
// // // Indice é a quantidade de elementos -1
// // //  Indice é a posiçao de cada elemento dentro do array
// // // A posição inicial é o 0

// // // var alunos = new Array("Tay", "João", "José", "Sabrina");

// //     // console.log(alunos[0]);

// // // SEGUNDA FORMA DE CRIAR ARRAY - []
// // // LENGTH É O TAMANHO DO ARRAY - EXP: QUANTIDADE DE ELEMENTS

// // // var alunos = ["Tay", "João", "José","Sabrina", "Miguel"];
// // //     // console.log(alunos.length);

// // var alunos = ["Tay", "João", "José","Sabrina", "Miguel"];
// //     for (var n = 0; n < alunos.length; n++) {
// //         console.log(alunos[n]);
// // }

// // // var alunos = ["Tay", "João", "José", "Sabrina", "Miguel"];
// // //     for (var num = 0; num < alunos.length; num++) {
// // //         console.log(alunos[num]);
// // // }

// // FUNÇÃO

// // function media(n1,n2) {
// //     var nota1 = n1;
// //     var nota2 = n2;
// //     var media = (nota1 + nota2) /2;
// //     // console.log()
// // return media;

// // }

// // var resultado1 = media(6, 7);
// // var resultado2 = media(8, 7);
// //     console.log(resultado1 + " e " + resultado2);

// // EXEMPLO ARRAY

// // var nomes =["Tay", "Suh", "Juh",];
// //     console.log(nomes[0])

// // var a = "Primeira linha \n segunda linha";
// // console.log(a);

// // Praticando usando operador ternário como if e dois pontos como ele

// // var loja = alert("Seja em vindo a nossa loja de facas!");
// // var idade = prompt("Qual a sua idade?");

// // if (idade >= 18) {
// // 	var quantidade = prompt("Quantas facas você deseja?");
// // 	quantidade >= 10
// // 		? alert("A partir dessa quantidade você tem desconto!")
// // 		: alert("A partir dessa quantidade você não tem desconto!");
// // }

// //  else {
// // 	alert("Desculpe, você não pode adquirir nossos produtos");
// // }

// Treino
// var numero = 10

// for(var vez = 0; vez > numero; vez++) {

// 	console.log(vez);
// }

// Treino
// var numero = 5;

// for (var vez = 0; vez < numero; vez++) {

// 	console.log(vez);
// }

// Treino
// var numero = 5;

// while (numero < 10) {

// 	console.log('Número ' + numero);
// 	numero++
// }

// Treino length
// var alunos = ['Pedro', 'Tiago', 'João',
// 			 'Felipe', 'Natanael', 'Mateus'];

// 	for (var quantidade = 0; quantidade < alunos.length; quantidade++) {
// 		console.log(alunos[quantidade])
// 		// length é a quantidade de index/índice/posições do array

// }
// Outra forma
// Com o "in" pega o index/índice/posição
// for (var quantidade in alunos) {
// 	console.log(alunos[quantidade]);
// }

// Outra forma
// Com o "of" pega o elemento/valor
// for (var quantidade of alunos) {
// 	console.log(alunos[quantidade]);
// }


			// Praticando

// var hora = prompt('Que horas');
// var nome = prompt('Qual o seu nome?');

// if(hora >= 0) {
// 	alert('Bom dia, ' + nome);
// }

// else if(hora >= 12) {
// 	alert('Boa tarde,' + nome);
// }

			// Praticando

// function media()  {
// 	var nota1 = 8;
// 	var nota2 = 8;
// 	var media = (nota1 + nota2) / 2;
// 		console.log(media);
// }

			// Praticando

// var numero = 5;

// for(var vez = 1; vez <= numero; vez++) {
// 	alert('Executando o for pela ' + vez + ' vez');
// }

// alert('Acabou');

// var numero = 5;

// while(numero <= 10) {
// 	alert('Numero ' + numero);
// 	numero++
// }

// alert('Acabou');


				// Praticando

// var alunos = new Array('Tay', 'Magão', 'Zias' );

// 	alert(alunos[0]);
	// Quando coloco o [0] eu pego a primeira
	// posição dentro do Array
	// O Array começa do 0

				// Praticando

// var alunos = ['A', 'E', 'I', 'O', 'U'];
// 	for (var vogais = 0; vogais < alunos.length; vogais++) {
// 		console.log(alunos[vogais]);
// 	}

// var alunos = ['A', 'E', 'I', 'O', 'U'];
// 	for (var vogais in alunos) {
// 		console.log(alunos[vogais]);
// 	}	

// var alunos = ['A', 'E', 'I', 'O', 'U'];
// 	for (var vogais of alunos) {
// 		console.log(vogais);
// 	}	

					// Praticando - Função
			// Função = apelido para um bloco de comando

// function media(n1, n2) {
// 	var nota1 = n1;
// 	var nota2 =n2;
// 	var media = (nota1 + nota2)/2;
			//// console.log(media);
	// return media;

// }					

//// media(6.5, 8);
//// media(9, 7.5);
// var resultado1 = media(6.5, 8);
// var resultado2 = media(9, 7.5);
// 	console.log(resultado1 + ' E ' + resultado2)

					// Praticando mais função
			// No JS uma função pode ser uma variável

// //function saudacao() {

//// 	return 'Olá mundo!'; 
//// }

//// var s = saudacao();
//// 	console.log(s);
		
// var media = function (n1, n2) {

// 	return (n1 + n2)/2;

// }
// var m = media(7, 8);
//// console.log(media(7, 8));
// console.log(m);


				// Praticando com tudo absorvido até agora
	        // Quero o nome do aluno - nota1 - nota2 - Apro/Repr 

// var nome = ['Taylan', 'Yasmim', 'Juh'];
// var nota1 = [9.0, 7.5, 10];
// var nota2 = [9.5, 9.0, 8.5];

// function media(n1, n2) {

// 	return (n1 + n2)/2;
// }

// function situacao(media) {

// 	if(media >= 8.5){
// 		return 'Aprovado';
// 	}
// 	else {
// 		return 'Reprovado';
// 	}
// }

// for (var ordem in nome) {
//// Com o "in" pega o index/índice/posição

// 	var PrimeiraNota = nota1[ordem];
// 	var SegundaNota = nota2[ordem];
// 	var m = media(PrimeiraNota, SegundaNota)

// 		console.log(nome[ordem] + ' - '
// 				+ PrimeiraNota + ' - '
// 				+ SegundaNota + ' - '
// 				+ m + ' - '
// 				+ situacao(m));

// }

// console.log('Fim de projeto');


				// Treinando objetos 

// 	var calcMedia = function() {
// 		return this.nota1 + this.nota2 / 2;
// 	}

// var turma = [
// 	{
// 		nome: 'Taylan',
// 		nota1: 9,
// 		nota2: 7,
// 		media: calcMedia,
// 	},
// 	{
// 		nome: 'Pedro',
// 		nota1: 7,
// 		nota2: 6,
// 		media: calcMedia,
// 	}
// ]

// var aluno = turma[1];
// console.log(aluno);
// console.log(aluno.media());