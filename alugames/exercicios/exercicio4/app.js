function ordenarNumerosCrescente(a, b, c) {
    
    let aux1;
    let aux2;

    if(b > a) {
        aux1 = a;
        a = b;
        b = aux1;
    }

    if (c > b) {
        if(c > a) {
            aux1 = a;
            a = c;
            aux2 = b;
            b = aux1;
            c = aux2;
        } else {
            aux1 = c;
            c = b;
            b = aux1;
        }
    }

    console.log(`Números na ordem crescente: ${c}, ${b}, ${a}`);
}