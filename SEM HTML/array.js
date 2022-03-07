console.log("=== ARRAY ===");

//array literal

const carros = ["Gol", "Corsa", "Fox"];
//contexto.comando();
carros.push("Corolla") //add item no final do array
carros.unshift("Marea") // add item no início do array
carros.splice(1,1) //remove item na posição 1 carros.splice(1 = posição onde começa, 1 = quantos elementos remove a partir a posição citada antes)
carros.splice(0, 1, "BMW") // substitui item na posição 0 pela string passada / splice(0 = posição, 1 = quantos elementos remove a partir da posição citada antes, "BMW" = adiciona na posição citada antes)
carros.splice(2,0,"Fusca", "Gol")

carros.pop(); // remove o último item do array
carros.shift(); //remove o primeiro item do array

carros.sort(); //ordena os itens por ordem alfabética
carros.reverse(); //inverte os itens do array

document.write(carros[2], "<br><br>"); // mostra o valor do indice referenciado

for(let i = 0; i <carros.length; i++) {
    document.write("- ", carros[i], "<br>");
}
//for pra passar por todos os elementos
document.write("<hr>")

//implementação 1
//função nomeada
document.write("Implementação 1 - função nomeada<br><br>")
function pegacarro(modelo, indice) {
    console.log("pegou?")
    document.write("=> Modelo ", modelo," na posição ",indice, " do array;<br>")
}

carros.forEach(pegacarro)
//forEach passa por todos os itens do array e devolve o valor e o indice que de ser recebido na função conforme exemplo acima.

//implementação 2
//função anônima
document.write("<hr>")
document.write("Implementação 2 - função nomeada<br><br>")

carros.forEach( function(modelo1, indice1) {
    document.write("=> Modelo ", modelo1," na posição ",indice1, " do array;<br>")
}
)

console.log(carros);



const numeros = [32, 21, 25, 17, 1];

console.log("===");

numeros.forEach(function() {
    console.log(arguments[0]) // arguments recebe todos os parametros passados para a função, e armazena num array as informações, nesse caso no indice 0 ficam os número, no indice 1 ficam os indices e no indice 3 fica o array todo
});

// FILTER
console.log("=== FILTER ===")
document.write("<hr>FILTER <br><br>");
document.write("Usando Filter para encontrar os números maiores que 10 no Array [32. 21, 25, 17, 1]<br>");
console.log("Usando Filter para encontrar os números maiores que 10 no Array [32. 21, 25, 17, 1]");

let filter = numeros.filter(function(numero){
    console.log("filter?", numero)
    return numero > 10;
});

console.log(filter);
document.write(filter);

// MAP
console.log("=== MAP ===")
document.write("<hr>MAP <br><br>");
document.write("Usando MAP para fazer a tabuada do 5 no Array [32. 21, 25, 17, 1]<br>");
console.log("Usando MAP para fazer a tabuada do 5 no Array [32. 21, 25, 17, 1]");

let map = numeros.map( function(numero) {
    console.log("map?", numero);
    return numero * 5;
});

console.log(map);
document.write(map);

// reduce
console.log("=== REDUCE ===")
document.write("<hr>REDUCE <br><br>");
document.write("Usando REDUCE para somar todos os números do Array [32. 21, 25, 17, 1]<br>");
console.log("Usando REDUCE para somar todos os números do Array [32. 21, 25, 17, 1]");

let reduce = numeros.reduce(function(previous, current, index, array){
    console.log("prev: ", previous, "current: ", current);
    return previous + current;
});

console.log(reduce);
document.write(reduce);


document.write("<br>Usando REDUCE para multiplicar todos os números do Array [32. 21, 25, 17, 1] por 2<br>");
console.log("Usando REDUCE para multiplicar todos os números do Array [32. 21, 25, 17, 1] por 2");

let reduce2 = numeros.reduce(function(previous, current){
    console.log("prev: ", previous, "current: ", current);
    previous.push(current *2);
    return previous;
}, []);

console.log(reduce2);
document.write(reduce2);

console.log("=== ARROW FUNCTION ===")
document.write("<hr>ARROW FUNCTION <br><br>");
document.write("Usando ARROW FUNCTION do Array [32. 21, 25, 17, 1] com FILTER<br>");
console.log("UUsando ARROW FUNCTION do Array [32. 21, 25, 17, 1] com FILTER");

let numbers = [1, 2, 3];

console.log(`numbers.filter(function(value){
    return value;
})`)
document.write(`numbers.filter(function(value){
    return value;
})<br>`);

console.log(`numbers.filter(value => value)`)
document.write(`numbers.filter(value => value)<br>`);



