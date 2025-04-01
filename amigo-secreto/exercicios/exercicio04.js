function embaralhar(lista) {
    
    for(let indice = lista.length; indice; indice--) {
        
        const indiceAleatorio = Math.floor(Math.random() * indice);

        //atribuição vua destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

let minhaLista = [];

minhaLista.push(1, 2, 3);
console.log("Adicionando elementos:", minhaLista);

let outrosNumeros = [4, 5, 6];

let novaLista = minhaLista.concat(outrosNumeros);

console.log("Juntando Arrays:", JSON.stringify(novaLista));

novaLista.splice(novaLista.length - 1, 1);

console.log("Removendo o último item do Array:", JSON.stringify(novaLista));

embaralhar(novaLista);

console.log("Embaralhando o Array: ", JSON.stringify(novaLista));