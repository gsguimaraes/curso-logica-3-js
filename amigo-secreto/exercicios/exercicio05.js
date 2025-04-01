function removerDuplicatas(array) {

    return [...new Set(array)];
}

let novaLista = [1, 1, 1, 4, 5, 6];
console.log("Lista: ", novaLista);

let novaListaSemDuplicatas = removerDuplicatas(novaLista);
console.log("Remover duplicatas: ", novaListaSemDuplicatas);