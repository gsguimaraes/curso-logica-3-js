function calcular() {

    let operacao = document.getElementById("operacao-matematica").value;
    let n1 = parseInt(document.getElementById("n1").value, 10);
    let n2 = parseInt(document.getElementById("n2").value, 10);

    switch(operacao) {

        case "adicao":
            alert("Resultado: " + adicionar(n1, n2));
            break;

        case "subtracao":
            alert("Resultado: " + subtrair(n1, n2));
            break;

        case "multiplicacao":
            alert("Resultado: " + multiplicar(n1, n2));
            break;

        case "divisao":
            alert("Resultado: " + dividir(n1, n2));
            break;
    }
}

function adicionar(n1, n2) {
    return n1 + n2;
}

function subtrair(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return n1 / n2;
}