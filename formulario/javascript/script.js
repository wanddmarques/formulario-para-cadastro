// Selecionando o formulário e os campos
const nome= document.querySelector("#nome");
const sobrenome= document.querySelector("#sobrenome");
const email= document.querySelector("#e-mail");
const password= document.querySelector("#senha");
const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    let enviarform = true;


    if (!nome.value) {
        console.log("O nome está vazio");
        enviarform = false;
    }
 
    if (!sobrenome.value){
        console.log("O nome ainda está vazio");
        enviarform = false;
    }

    if (!enviarform) {
        e.preventDefault();
    }     
});
