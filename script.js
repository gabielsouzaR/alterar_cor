function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de autenticação (usuário: admin, senha: admin)
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'home.html'; // Redireciona para a página principal
    } else {
        alert('Usuário ou senha incorretos');
    }
}

function alterarCor(cor) {
    if (cor) {
        document.body.style.backgroundColor = cor;
    } else {
        const nomeCorInput = document.getElementById('nomeCorInput');
        const codigoCorInput = document.getElementById('codigoCorInput');
        const nomeCor = nomeCorInput.value;
        const codigoCor = codigoCorInput.value;

        if (codigoCor) {
            document.body.style.backgroundColor = codigoCor;
        } else if (nomeCor) {
            document.body.style.backgroundColor = nomeCor;
        }
    }
}
