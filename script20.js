/*
    Método indexOf():
    Este método é muito útil, ele consiste em retornar a posição de um certo valor, caso ele exista, caso contrário ele retornará -1, utilizaremos o exemplo de prato de comida como base, veja:
*/
let arrPrato = new Array('Arroz','Tomate','Alface');

arrPrato.push('Feijão');

if (arrPrato.indexOf('Arroz') !== -1 ) {//neste caso, o método retornará 0, pois o indice de 'Arroz' está presente dentro do array, e o primeiro elemento será removido pelo método shift()
    arrPrato.shift();

}
console.log(arrPrato);

/* 
    Veja o exemplo, recebemos uma informação do garçom que o cliente que pediu o prato é alérgico a Arroz, então na linha 3 criamos uma decisão lógica para verificar se o alimento Arroz existe dentro da variável arrPrato, como neste caso a decisão lógica retornará verdadeiro, pois retornará o index do elemento, que no caso é 0, que é diferente de -1, porque existe realmente Arroz no prato, na linha 4 removemos o alimento Arroz do array e na linha 6 realizamos um log da variável arrPrato no console do navegador.
*/