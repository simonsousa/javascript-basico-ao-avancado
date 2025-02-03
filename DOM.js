/*
    ::Manipulação do DOM::

O DOM (Document Object Model) é uma representação
da página HTML como uma estrutura de árvore de objetos. Cada elemento na página é um objeto no DOM, e podemos manipulá-los usando javaScript.

    
    ::Selecionando elementos::
Podemos selecionar elementos no DOM usando vários métodos. Os mais comuns são: 

getElementById(): seleciona um elemento com um id específico.

getElementsByClassName(): seleciona elementos com uma classe específica.

getElementsByTagName(): seleciona elementos com uma tag específica em HTML.


    ::Alterando elementos::
Depois de selecionar um elemento, podemos alterá-lo de várias maneiras.

Podemos alterar o conteúdo de um elemento usando a propriedade .innerHTML, 

alterar o estilo de um elemento usando a propriedade .style e alterar os 

atributos de um elemento usando os metodos .setAttribute e .removeAttribute.

    O que são atributos?
Em JavaScript, atributos são como características ou propriedades que vc adiciona a objetos para descrevê-los melhor ou para armazenar dados específicos sobre eles. Imagine um objeto como uma pessoa: você pode adicionar atributos como "nome", "idade", "altura" para descrever essa pessoa de forma mais detalhada.

*/

let pessoa = { // objeto
    nome: 'Simon', // atributo: nome
    idade: 21,     // atributo: idade 
    altura: 1.70   // atributo: altura 
}

