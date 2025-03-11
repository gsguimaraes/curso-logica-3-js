let amigos = [];

function adicionar() {
    
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");
    
    amigos.push(amigo.value);

    if(lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent += ", " + amigo.value;
    }

    amigo.value = "";
}

function embaralhar(lista) {
    
    for(let indice = lista.length; indice; indice--) {
        
        const indiceAleatorio = Math.floor(Math.random() * indice);

        //atribuição vua destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {

    console.log(amigos);
    embaralhar(amigos);
    let sorteio = document.getElementById("lista-sorteio");

    for(let i = 0; i < amigos.length; i++) {

        if(i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + " --> " + amigos[0] + "<br>"; 
        } else {
            sorteio.innerHTML += amigos[i] + " --> " + amigos[i + 1] + "<br>";
        }
        
    }
}

function reiniciar() {
    listaAmigos = [];
    let lista = document.getElementById("lista-amigos");
    let nomeAmigo = document.getElementById("nome-amigo");
    let sorteio = document.getElementById("lista-sorteio");

    lista.innerText = "";
    sorteio = "";
    nomeAmigo.value = "";
}