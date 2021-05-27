/* let sobre = []
sobre.push(titulo);
sobre.push(estudo);
sobre.push(passatempo); */

function sobre(){
    setTimeout(aparecerTitulo, 700);
    setTimeout(aparecerEstudo, 1800);
    setTimeout(aparecerPassaTempo, 6500);
}

function aparecerTitulo(){
    let titulo = window.document.querySelector('h1');
    titulo.style.display = 'block';
}

function aparecerEstudo(){
    let resumo = window.document.querySelector('#resumo');
    resumo.style.display = 'block';
}

function aparecerPassaTempo(){
    let passatempo = window.document.querySelector('#passatempo');
    passatempo.style.display = 'block';
}