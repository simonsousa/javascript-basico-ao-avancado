/** 
 * WHILE
 * 
 * A condição do laço de repetição while não se limita a utilizar um contador, pois pode ser utilizado qualquer tipo de decisão lógica, vista anteriormente, para a definição de sua condição, como a comparação de textos, comparação de valores booleanos ou qualquer outra.
 
    O código que será executado enquanto a condição do laço de repetição retornar verdadeiro, caso contrario, o loop encerrará.
*/

let nomes = ['Soluço','Astrid','Melequento','Perna de peixe', 'Bocão'];

let nomePesquisado = null;

let i = 0;

while(nomePesquisado == null && i < nomes.length) {
    if(nomes[i] == 'Melequento') {
        nomePesquisado = nomes[i];
    } else {
        console.log(`${nomes[i]} não é o nome pesquisado`)
    }
    i++;
}
console.log(`Nome encontrado: ${nomePesquisado}`);