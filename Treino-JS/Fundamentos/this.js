
/* Em JavaScript, a palavra-chave this é usada para se referir ao objeto atual no contexto em que está sendo usada.
 O valor de this depende de como uma função é chamada e de onde ela está sendo executada.
 Aqui estão alguns cenários comuns de como o this funciona:

No contexto global:1
Quando this é usado no escopo global (fora de qualquer função), ele se refere ao objeto global,

console.log(this); // Referência ao objeto global (window no navegador, global no Node.js)
que é window no navegador e global no Node.js. */


/* Em métodos de objetos:
Quando this é usado dentro de um método de um objeto, ele se refere ao objeto que contém o método. */

 const objt = {
    prop: 'Hello',
    showProp: function () {
      console.log(this.prop); // this se refere a obj e imprime 'Hello'
    },
  };
  
  objt.showProp(); 


/*  Em funções normais:
Quando this é usado em uma função regular (não uma função de seta),
o valor de this depende de como a função é chamada. Isso pode ser um pouco complicado,
pois this pode variar dependendo do contexto. */ 

    function myFunction() {
        console.log(this);
    }
    
    myFunction(); // this se refere ao objeto global
    
    const myObject = {
        myMethod: myFunction,
    };
    
    myObject.myMethod(); // this se refere a myObject
    
    const myNewFunction = myFunction.bind(myObject);
    myNewFunction(); // this se refere a myObject  


/*    Em funções de seta:
As funções de seta (=>) não têm seu próprio valor this.
Elas herdam o valor de this do contexto pai em que foram definidas.  */

 const obj = {
    prop: 'Hello',
    showProp: () => {
      console.log(this.prop); // this se refere ao valor de this do contexto pai (fora do objeto)
    },
  };
  
  obj.showProp(); // Isso imprimirá 'undefined' porque não há prop no contexto pai 


/*  Construtores:
Quando uma função é usada como construtor com a palavra-chave new,
this se refere ao novo objeto que está sendo criado. */

    function MyClass(value) {
        this.value = value;
    }
    
    const myInstance = new MyClass(42);
    console.log(myInstance.value); // Isso imprimirá 42  



    
  
  