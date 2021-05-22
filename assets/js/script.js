let nome = window.document.querySelector('#nome');
let email = document.getElementById('email');
let mensagem = document.querySelector('#mensagem');
let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

nome.style.width = '100%';
email.style.width = '100%';

function validaNome() {
    if(nome.value.length > 2){
        nomeOk = true;
    }else{
        nomeOk = false;
    }
}

function validaEmail(){
    if(email.value.indexOf('@') != -1 && email.value.indexOf('.') != -1){
        emailOk = true;
    }else if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        emailOk = false;
    }
}

function validaMensagem(){
    if( mensagem.value.length > 5 && mensagem.value.length < 100){
        mensagemOk = true;
    }else{
        mensagemOk = false;
    }
}

function enviar(){
    validaNome();
    validaEmail();
    validaMensagem();

    if(nomeOk && emailOk && mensagemOk){
        alert('Formulário enviado com sucesso!');
    }else{
        alert('Erro: Algum campo está inválido');  
    }
}