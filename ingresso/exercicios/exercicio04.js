function verificarNumero () {
    
    let n1 = parseInt(document.getElementById("n1").value, 10);

    if(n1 % 2 == 0) {
        alert("O número é par!");
    } else {
        alert("O número é ímpar!");
    }
}