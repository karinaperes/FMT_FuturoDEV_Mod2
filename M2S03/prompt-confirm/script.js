document.getElementById('iniciar').addEventListener('click', function() {
    let nome = prompt('Digite seu nome')
    const textoContainer = document.getElementById('texto-inicio')

    textoContainer.classList.remove('error', 'sucess', 'info')
    textoContainer.textContent = ''

    if (!nome) {
        textoContainer.textContent = 'Erro: Nome deve ser informado'
        textoContainer.classList.add('message', 'error')
        textoContainer.classList.remove('hidden')
    } else {
        let confirmContinue = confirm(`Olá ${nome}, você quer continuar?`)

        if (confirmContinue) {
            textoContainer.textContent = 'A vingança nunca é plena, mata a alma e envenena.'
            textoContainer.classList.add('message', 'sucess')
            textoContainer.classList.remove('hidden')
        } else {
            textoContainer.textContent = 'Que pena.'
            textoContainer.classList.add('message', 'info')
            textoContainer.classList.remove('hidden')
        }
    }
})