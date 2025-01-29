function imprimirNumeros() {
    let string = document.getElementById("campoString").value;
    let label = document.getElementById("label");
    let numeros = string.split(",");

    label.innerHTML = "";
    for(let i = 0; i < numeros.length; i++) {
        label.innerHTML += `Número ${i + 1}: ${numeros[i]}<br>`;
    }

}