/*
    Propriedades de document

    O objeto document não tem somente métodos;

    podemos retirar várias informações importantes das suas propriedades também;

*/ 

//propriedades document
console.log(document.body);

console.log(document.head);

console.log(document.links[0]);

document.links[0].textContent = "Twitter";

console.log(document.URL);

console.log(document.title)

document.title = "Aula 42";

console.log(document.title);