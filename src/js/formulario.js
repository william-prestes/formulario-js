const botaoEnviar = document.getElementById('btn')

botaoEnviar.addEventListener('click', (enviar) => {
    enviar.preventDefault()

    const nomeCompleto = document.getElementById('nome')
    const email = document.getElementById('email')
    const telefone = document.getElementById('telefone')
    const mensagem = document.getElementById('textarea')
    const validacao = document.getElementsByClassName('validacao')

    if(nomeCompleto.value == ''){
        nomeCompleto.classList.add('campo-nao-preenchido');
        validacao[0].style.opacity = '100%';
    } else {
        nomeCompleto.classList.remove('campo-nao-preenchido');
        nomeCompleto.classList.add('campo-preenchido');
        validacao[0].style.opacity = '0';
    }

    if(email.value == ''){
        email.classList.add('campo-nao-preenchido');
        validacao[1].style.opacity = '100%';
    } else {
        email.classList.remove('campo-nao-preenchido');
        email.classList.add('campo-preenchido');
        validacao[1].style.opacity = '0';
    }

    if(telefone.value == ''){
        telefone.classList.add('campo-nao-preenchido');
        validacao[2].style.opacity = '100%';
    } else {
        telefone.classList.remove('campo-nao-preenchido');
        telefone.classList.add('campo-preenchido');
        validacao[2].style.opacity = '0';
    }

    if(mensagem.value == ''){
        mensagem.classList.add('campo-nao-preenchido');
        validacao[3].style.opacity = '100%';
    } else {
        mensagem.classList.remove('campo-nao-preenchido');
        mensagem.classList.add('campo-preenchido');
        validacao[3].style.opacity = '0';
    }
})