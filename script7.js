/*
    SWITCH

    imagine que voce precisa criar um código para verificar qual 
    
    é a profissão de alguém, no que esta pessoa trabalha. Existem 
    
    diversos tipos de trabalhos e poderíamos criar esta
    
    verificação utilizando comandos (if/else), mas para deixar 
    
    nosso código mais apresentável, vamos usar o comando switch, 
    
    vejamos o exemplo:

*/

var nome = "Michele";
var emprego = "motorista";

switch (emprego) {
    case "policial":
        console.log(nome + " é uma policial.");
        break;
    
    case "cozinheiro":
        console.log(nome + " é uma cozinheira.");
        break;    
        
    case "desenvolvedor":
        console.log(nome + " é uma desenvolvedora.");
        break;
        
    case "lutador":
        console.log(nome + " é uma lutadora.");
        break;

    default:
        console.log(nome + " trabalha em outra coisa.");
        break;
}

/*
    No exemplo temos a variável nome com o nome de uma pessoa e 
    
    uma outra variável emprego com a informação no que esta 
    
    pessoa trabalha.

    veja a declaraçõa switch, há entre parênteses a variável 
    
    emprego, isto significa que será esta a variável verificada. 
    
    O case seria a decisão lógica, assim como o if.

    O case verifica se caso o valor da variável emprego seja uma 
    
    das opções ali declaradas, como policial, então executará o 
    
    código logo abaixo.

    O break é obrigatório ser utilizado dentro do case, pois 
    
    serve pra parar o código, caso o valor correto seja 
    
    encontrado, caso contrário, o switch, mesmo tendo achado o 
    
    valor correto, sem o break vai continuar tentando achar o 
    
    valor correto.

    O default pode ser comparado com a declaração else, caso 
    
    nenhum dos cases sejam compatíveis com o valor da variável 
    
    emprego, o bloco abaixo do default será executado.

*/ 