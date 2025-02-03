/* 
sabendo agora como funções e variáveis funcionam, tente modificar a função 

verificarIdade do último exemplo. Recorte o trecho de código que valida se a 

pessoa é maior de idade ou não, da linha 3 a 7, coloque esta verificação 

dentro de uma outra função chamada verificarMaiorIdade, faça essa nova função 

retornar a mensagem como no penúltimo exemplo e armazene esse retorno em uma 

variável chamada mensagemRetorno e faça um log desta mensagem.
*/

function verificarIdade( nomePessoa , dataDeNascimento)
{
    function verificarMaiorIdade() {
        var idade = 2025 - dataDeNascimento
        if ( idade >= 18 ) {

            return `${nomePessoa} é maior de idade`

        } else {

            return `${nomePessoa} tem menos de 18 anos`

        }
    }
    let mensagemRetorno = verificarMaiorIdade()

    console.log(mensagemRetorno)
}

verificarIdade('joao' , 2012 )
