console.log("=== FUNÇÕES ===")

// Declaração de Função Nomeada
function soma (n1=0, n2=0) { // defoult parameter
    
    return n1 + n2;
}
console.log(soma) //Ref Func
console.log(soma()) //
console.log(soma(5)) //
console.log("Soma: ", soma(2, 4))

//soma todos os números que passar
function soma1() {
    let args = [].slice.call(arguments, 0);
    
    let soma = 0;

    for (let i = 0; i < args.length; i += 1) {
        soma += args[i];
    };

    return soma;
}

// Declaração de Função Não Nomeada (Anônima)
const sum = function (a=0, b=0) {
    return a + b;
}

console.log( sum);
console.log( sum());
console.log( sum(5));
console.log( sum(5, 10));
