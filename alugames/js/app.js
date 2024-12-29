function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    let nome = gameClicado.querySelector(".dashboard__item__name").textContent;
    let confirmacao;

    if(botao.classList.contains("dashboard__item__button--return") && imagem.classList.contains("dashboard__item__img--rented")) {
        confirmacao = confirm(`Você deseja devolver o jogo ${nome}?`);
        if (confirmacao){
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";  
        } else {
            return;
        }
        
    } else {
        confirmacao = confirm(`Você deseja alugar o jogo ${nome}?`);
        if (confirmacao){
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        } else {
            return;
        }
    }

    registrarJogosAlugados();
}

function registrarJogosAlugados() {
    let quantidadeJogosAlugados = 0;

    for(let i = 1; i <= 3; i++) {
        let gameClicado = document.getElementById(`game-${i}`);
        let imagem = gameClicado.querySelector(".dashboard__item__img");
        let botao = gameClicado.querySelector(".dashboard__item__button");

        if (botao.classList.contains("dashboard__item__button--return") && imagem.classList.contains("dashboard__item__img--rented")) {
            quantidadeJogosAlugados++;
        }
    }

    console.log(`Quantidade de jogos alugados: ${quantidadeJogosAlugados}`);
}