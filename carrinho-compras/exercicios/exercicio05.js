function exibirFrase() {
    let campoFrase = document.getElementById("campoFrase").value;
    let frase = campoFrase.split(";");
    let label = document.getElementById("campoFraseSeparada");

    label.innerText =
    `
    Frase 1: ${frase[0]}
    Frase 2: ${frase[1]}
    `
}