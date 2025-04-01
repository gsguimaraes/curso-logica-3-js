let minhaLista = [];

minhaLista.push(1, 2, 3);
console.log("Adicionando elementos:", minhaLista);

let outrosNumeros = [4, 5, 6];

let novaLista = minhaLista.concat(outrosNumeros);

console.log("Juntando Arrays:", novaLista);

novaLista.splice(novaLista.length - 1, 1);

console.log("Removendo o último item do Array:", novaLista);