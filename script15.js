/*
    Nestes exemplos que criamos, vimos apenas arrays com os mesmos tipos de dados, porém um array pode conter quantos tipos de dados desejarmos, assim como outros arrays dentro de arrays.
*/

//new Array(nome jogador, ano nascimento, pontos)
let arrRicardo = new Array('Ricardo', 1998 , 45);
let arrMonica = new Array('Monica', 1975 , 71);
let arrLeonardo = new Array('Leonardo', 1991 , 78);

var arrJogadores = new Array(arrRicardo, arrMonica, arrLeonardo);//armazenando vetores dentro de arrJogadores

console.log(arrJogadores);

/*
    Neste exemplo criamos um array para cada jogador com suas respectivas informações como pode ser visto nas linhas 2 , 3 e 4. Após a criação destes arrays criamos uma variável arrJogadores do tipo array e colocamos dentro deste array as variáveis dos jogadores separados por vírgulas, e apresentamos o arrJogadores no console do navegador na linha 6, assim vemos que realmente podemos utilizar qualquer valor dentro de um array
*/