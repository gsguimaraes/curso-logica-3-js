function sortear() {

    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let sorteados = [];
    let numero;
    let range = (ate - de) + 1;

    if (range <= 0) {
        alert("O limite mínimo não pode ser maior ao limite máximo!");
        return;
    }

    if (quantidade > range) {
        alert("A quantidade de números não pode ser maior que o intervalo definido!");
        return;
    }

    for (let i = 1; i <= quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            alert("Tentando obter número inédito");
        }
        console.log("Número gerado: " + numero);
        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {

    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroAleatorio;
}

function alterarStatusBotao() {

    let botao = document.getElementById("btn-reiniciar");

    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {

    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}