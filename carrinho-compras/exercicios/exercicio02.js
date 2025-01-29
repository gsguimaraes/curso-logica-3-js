function capturarValores() {

    // Carregar valores
    let nome = document.getElementById("campoNome").value;
    let idade = document.getElementById("campoIdade").value;
    let campoTexto = document.getElementById("mostraNome");

    campoTexto.innerHTML = 
    `
    <span>Nome: ${nome}<br>
    Idade: ${idade}</span>
    `
}