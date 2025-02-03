/*
    Objetos e Propriedades:
    
    No último tópico vimos arrays e algumas de suas funções, também como pegar e alterar o valor da posição de um array por seu identificador numérico, porem imagine agora que vc quer alterar um valor, mas não informando um indicador, e sim um nome para uma posição em específico. Quando utilizamos objetos é possível fazer isto, pois existe um aspecto em objetos chamado de par de valores-chave, conhecido em inglês como key-value pair(KVP)

    
    Key-value pair (KVP):
    Um conjunto de dois itens de dados vinculados, uma chave exclusiva nomeada para identificar um dado ou conjunto de dados, cada valor tem um identificador, este identificador é um ponteiro para a localização de dados.

    Quando utilizamos objetos não precisamos nos preocupar com a ordem dos valores ou informações. Objetos não exigem uma ordenação específica, o que é diferente de quando utilizamos arrays, pois quando precisamos retornar um valor de um array, precisamos saber exatamente em qual posição está cada informação. Quando utilizamos objetos, basta saber o nome da chave que identifica o valor que desejamos retornar, veja o exemplo:

*/

let objetoCarro = {
    modelo: '147',
    numeroVidros: 4,
    marca: 'Fiat',
    numeroPortas: 2,
}

let objetoCasa = new Object();

objetoCasa.numeroComodos = 5;
objetoCasa.valorImovel = 523000.320;

objetoCasa['alugel'] = false;
objetoCasa['vendo'] = true;

objetoCarro.numeroPortas = 4;
let umIdentificadorDaCasa = 'valorImovel';

console.log(objetoCarro);
console.log(objetoCarro.modelo);

console.log(objetoCasa['numeroComodos']);
console.log(objetoCasa[umIdentificadorDaCasa]);

/*
    Vamos entender o exemplo, na linha 1 utilizamos chaves, uma das formas que existem para declarar um objeto, criamos um objeto nomeado objetoCarro, entre as linhas 2 e 5 definimos 4 propriedades para este objeto objetoCarro.

    Na linha 8 criamos um outro objeto chamado objetoCasa utillizando a declaração new, a segunda forma existente para a criação de objetos, entre as linhas 9 e 12 definimos algumas propriedades para este objeto objetoCasa, veja que nas linhas 9 e 10 utilizamos notação de ponto para declarar o valor para duas propriedados do objeto e nas linhas 11 e 12 utilizamos a notação de colchetes para declarar outros dois valores para o objeto

    Na linha 14 utilizamos a notação de ponto para mutar o valor da propriedade numeroPortas do objeto objetoCarro. Na linha 15 declaramos uma variável com um valor de texto que é exatamente o nome da chave valorImovel e na linha 20 utilizamos esta variável para retornar o valor da propriedade valorImovel do objeto objetoCasa utilizando notação de colchetes. Nas linhas de 17 a 20 utilizamos a mesma sintaxe que utilizamos para mutar a propriedade de um objeto, agora para exibir o valor destas propriedades no console do navegador.

*/

let objetoTeste = new Object();

objetoTeste.valor = 2500;

console.log(objetoTeste);

let identificadorTeste = 'valor'

console.log(objetoTeste[identificadorTeste])