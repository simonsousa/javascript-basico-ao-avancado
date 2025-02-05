// function dizerNome() {
//     console.log(this.nome);
// }

// let pessoa1 = { nome: 'Maria gadu'}
// pessoa1.saudar = dizerNome;

// pessoa1.saudar();

function calcQuadrado() {
    console.log(Math.pow(this.num , 2));
}

let numeros = { num: 8 };

numeros.quadrado = calcQuadrado;
numeros.quadrado();