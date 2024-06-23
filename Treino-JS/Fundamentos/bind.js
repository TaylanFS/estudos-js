// O método bind() em JavaScript é usado para criar uma nova função que, quando chamada,
// tem sua palavra-chave this definida com o valor fornecido.
// Isso permite que um objeto pegue emprestado um método de outro objeto sem fazer uma cópia desse método,
//  o que é reconhecido como empréstimo de função em JavaScript.

// Por exemplo, se você tem um objeto person com um método sayHello,
// você pode criar um novo objeto anotherPerson e emprestar o método sayHello do objeto person usando o método
// bind() da seguinte maneira:

const person = {
    name: 'John',
    sayHello() {
      console.log(`Hello, my name is ${this.name}!`);
    }
  };
  
  const anotherPerson = {
    name: 'Jane'
  };
  
  const sayHello = person.sayHello.bind(anotherPerson);
  sayHello(); // Hello, my name is Jane!

//   Nesse exemplo, a função sayHello é criada usando o método bind() do método sayHello do objeto person.
// O primeiro argumento passado para o método bind() é o objeto que será usado como this dentro da função sayHello.
// Quando a função sayHello é chamada, ela usa o objeto anotherPerson como this,
// permitindo que o método sayHello do objeto person seja emprestado pelo objeto anotherPerson