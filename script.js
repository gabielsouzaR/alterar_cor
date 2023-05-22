function abrirMudarCor() {
    window.location.href = 'mudar_cor.html';
}

function abrirCalculadoraIMC() {
    window.location.href = 'calculadora_imc.html';
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

function calcularIMC() {
    const alturaInput = document.getElementById('altura');
    const pesoInput = document.getElementById('peso');
    const resultadoDiv = document.getElementById('resultado');

    const altura = alturaInput.value / 100; // Converter para metros
    const peso = pesoInput.value;

    if (altura && peso) {
        const imc = peso / (altura * altura);
        const classificacao = getClassificacaoIMC(imc);

        resultadoDiv.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
    } else {
        resultadoDiv.innerHTML = 'Por favor, preencha a altura e o peso corretamente.';
    }
}

function getClassificacaoIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        return 'Sobrepeso';
    } else if (imc < 35) {
        return 'Obesidade Grau I';
    } else if (imc < 40) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar se o usuário e a senha estão corretos
    if (username === "admin" && password === "admin") {
        // Login bem-sucedido, redirecionar para a próxima página
        window.location.href = "home.html";
    } else {
        // Exibir mensagem de erro
        var errorText = document.getElementById("error-text");
        errorText.textContent = "Usuário ou senha incorretos. Por favor, verifique suas credenciais.";
    }
    if (document.title === "Login") {
        // Código para a página de login
        function login() {
            // ...
        }
    }

}
