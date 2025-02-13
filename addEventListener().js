let cursos = [...document.querySelectorAll(".curso")] // cria um array com todos os elementos com a classe=curso

cursos.map((element) => {
    element.addEventListener("click",(event) => {
        const destaque = event.target;
        destaque.classList.add("destaque");
        console.log(`O elemento de conteúdo: ${element.innerHTML}, de id: ${element.id} foi clicado!!!`);
    })
})

// const msg = () => {
//     alert('botão clicado!');
//     btnJava.style.background = 'green';
//     btnJava.textContent = 'btn clicado'; 
// }
// btnJava.addEventListener("click",msg);


// const msg = () => {
//     alert('botão clicado!');
//     btnJava.style.background = 'green';
//     btnJava.textContent = 'btn clicado'; 
// }

// btnJava.addEventListener("click",(evento) =>{ 
//      console.log(evento.target); //vai mostrar quem disparou o evento(PointerEvent)
//     const destaque = evento.target;
//     destaque.classList.add("destaque");
// })


// btnJava.addEventListener("click", () => {
//     alert('o botao foi clicado!!');
//     btnJava.style.background = 'yellow'; 
// })