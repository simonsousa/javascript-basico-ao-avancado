/*
    Operador spread(...):

    Em JavaScript é uma forma concisa de 'espalhar' os elementos de um array ou as propriedades de um objeto. Ele pode ser utilizado para copiar valores de um array ou objeto para outro ou para combinar múltiplos arrays/objetos.
*/

//copiar um array;
const arr1 = [ 1, 2, 3];
const arr2 = [...arr1]; // criou uma cópia independente de arr1

console.log(arr2);

//concatenar arrays;
const vetor1 = [ 1, 2];
const vetor2 = [3, 4, 5];
const vetor3 = [...vetor1, ...vetor2];// combinou 2 arrays em um só

console.log(vetor3);

//passar argumentos para funções
const numeros = [3, 4, 5];
Math.max(...numeros);

console.log(numeros)