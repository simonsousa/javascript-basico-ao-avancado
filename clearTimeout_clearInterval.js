/*
    clearTimeout e clearInterval

podemos por um fim em setTimeout e setInterval por meio destes dois métodos;

Então após determinada condição os timers não serão mais executados;

*/ 
let x = 0;

let myTimer = setTimeout(function() {//encapsulamento
    
    console.log("O x é 0");// instruções dentro da callback

}, 5000);

x = 5;

if(x > 0) {
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

//clearInterval na prática
let myInterval = setInterval(() => {

    console.log("Imprimindo Interval");

},500)// a cada meio segundo

setTimeout(() => {
    //area da callback
    console.log("Não precisamos mais repetir")
    clearInterval(myInterval);

},1500);