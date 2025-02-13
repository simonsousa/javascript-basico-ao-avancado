/*
    Adicionando elemento

    Podemos inserir um elemento dentro de outro, por exemplo um parágrafo em uma div;

    isso é considerado como "acrescentar um filho" em JS;
*/ 

//CRIAR ELEMENTO
let elem = document.createElement("div");//criando a tag div

elem.classList = "div-criada";//criando a classe 

console.log(elem);

let container = document.querySelector("#container");

// inserindo elemento filho
container.appendChild(elem);


// insertBefore - insere antes
let elem2 = document.createElement("div");

elem2.classList = "div-before";

let elem3 = document.querySelector("#container .div-criada");

console.log(elem3);

container.insertBefore(elem2, elem3);