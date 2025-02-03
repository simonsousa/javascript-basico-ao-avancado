/*
    Arrays, tbm conhecidos como Matrizes ou vetores, podem nos ajudar a criar códigos mais limpos e organizados, assim como facilitar muitas questões e a nos ajudar a economizar várias linhas de código

    imagine que precisamos criar um script para calcular a pontuação de três jogadores os identificando pelo nome e idade. Primeiramente criaremos variáveis para esses jogadores, para ser mais exato precisaríamos criar nove variáveis inicialmente para armazenar o nome, pontos e idade de cada um dos jogadores. Agora imagine por exemplo ser possível agrupar essas informações em uma única variável, na linguagem JavaScript, assim como em outras linguagens de programação, é possível e existem algumas maneiras de fazermos isto, uma forma é utilizando Array. 
*/
let arrJogadores = ['Ricardo','Monica','Leonardo'];

let arrAnoNascimento = new Array(1998, 1975, 1991);//expressão para criar um novo vetor, separado por vírgulas

let arrPontos = [45, 117, 78];

arrPontos[1] = 71;

console.log(arrJogadores);

console.log(`${arrJogadores[1]} tem ${arrPontos[1]} pontos`);
