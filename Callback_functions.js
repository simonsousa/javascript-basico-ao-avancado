/*
    Callback functions

    A função de callback é um recurso muito interessante e também amplamente utilizado em JS;

    Permite executar uma função depois de uma determinada ação

    conceito fundamental para entender a parte assíncrona do JS;
*/
function exibir(num) {
    console.log(`A operação resultou em: ${num}`);
}


function soma(a, b, callback) {
    var op = a + b;
    callback(op);
}

function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(2, 2, exibir);

multiplicacao(2, 4, exibir);