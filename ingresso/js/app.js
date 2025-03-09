function comprar() {
    
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const quantidadeIngresso = parseInt(document.getElementById('qtd').value, 10);

    if(isNaN(quantidadeIngresso) || quantidadeIngresso <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    const ingressosDisponiveis = {
        inferior: document.getElementById("qtd-inferior"),
        superior: document.getElementById("qtd-superior"),
        pista: document.getElementById("qtd-pista")
    };

    const quantidadeTipo = ingressosDisponiveis[tipoIngresso]?.textContent;
    
    if(quantidadeTipo === undefined) {
        alert("Tipo de ingresso inválido.");
        return;
    }

    const quantidadeAtual = parseInt(quantidadeTipo, 10);

    if(validarQuantidade(quantidadeAtual, quantidadeIngresso)) {
        ingressosDisponiveis[tipoIngresso].textContent = `${quantidadeAtual - quantidadeIngresso}`
    }

}

function validarQuantidade(quantidadeAtual, quantidadeIngresso) {

    const novaQuantidade  = quantidadeAtual - quantidadeIngresso;
    
    if(novaQuantidade < 0) {
        alert('Quantidade indisponível!');
        return false;
    }
    return true;
}