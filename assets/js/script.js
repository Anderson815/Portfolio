/* let sobre = []
sobre.push(titulo);
sobre.push(estudo);
sobre.push(passatempo); */

let titulo = window.document.querySelector('h1');
let resumo = window.document.querySelector('#resumo');
let passatempo = window.document.querySelector('#passatempo');

function reloadSobre(){
    titulo.style.display = 'none';
    resumo.style.display = 'none';
    passatempo.style.display = 'none';

    sobre();
}

function sobre(){
    setTimeout(aparecerTitulo, 700);
    setTimeout(aparecerEstudo, 1800);
    setTimeout(aparecerPassaTempo, 6500);
}

function aparecerTitulo(){
    titulo.style.display = 'block';
}

function aparecerEstudo(){
    resumo.style.display = 'block';
}

function aparecerPassaTempo(){
    passatempo.style.display = 'block';
}