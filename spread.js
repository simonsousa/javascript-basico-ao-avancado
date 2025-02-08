/*
    Operador spread(...):

    Em JavaScript é uma forma concisa de 'espalhar' os elementos de um array ou as propriedades de um objeto. Ele pode ser utilizado para copiar valores de um array ou objeto para outro ou para combinar múltiplos arrays/objetos.
*/

//copiar um array;
const arr1 = [ 1, 2, 3];
const arr2 = [...arr1]; // criou uma cópia independente de arr1

console.log(arr2);

//concatenar arrays;
const vetor1 = [1, 2];
const vetor2 = [3, 4, 5];
const vetor3 = [...vetor1, ...vetor2];// combinou 2 arrays em um só

console.log(vetor3);

//passar argumentos para funções
const numeros = [3, 4, 5, 2];
console.log(Math.max(...numeros));


//criando novos objetos
const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {
    ...obj1, // cria um novo objeto com as propriedades de obj1.
    c: 3,
    d: 4
}

console.log(obj2)

//desestrurar arrays e objetos
const [primeiro, segundo, ...restante] = [1, 2, 3, 4, 5];
console.log(restante);