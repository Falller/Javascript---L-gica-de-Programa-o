console.log("=== OBJETOS ===")

// implementação sem objetos
document.write("IMPLEMENTAÇÃO SEM OBJETO <br>")
const carro1 = ["Gol", "2011", "Preto", "Usado"];
const carro2 = ["Uno", "2015", "Branco", "Novo"];
const carro3 = ["Palio", "2001", "Azul", "Usado"];

const carros = [carro1, carro2, carro3];

for (let index = 0; index < carros.length; index++) {
    console.log(carros[index][0]);
    document.write(
        carros[index][0], 
        " - ",
        carros[index][2],
        "<br>"
    )
    
}

document.write("<hr>")
//implementação com objetos
document.write("IMPLEMENTAÇÃO SEM OBJETO <br>")

const carrosobj = {
    modelo: "Gol",
    ano: 2010,
    cor: "Vermelho",
    situacao: "Usado"
};

const carrosobj2 = {
    modelo: "Palio",
    ano: 2020,
    cor: "Preto",
    situacao: "Novo"
};

//array de objetos

const cars = [carrosobj, carrosobj2];

console.log(cars)

//array de objetos outra implementação, até melhor

const cars2 = [
    {
        modelo: "Gol",
        ano: 2010,
        cor: "Vermelho",
        situacao: "Usado"
    },
    {
        modelo: "Palio",
        ano: 2020,
        cor: "Preto",
        situacao: "Novo"
    },
    {
        modelo: "Uno",
        ano: 2021,
        cor: "Azul",
        situacao: "Novo"
    }

];


console.log(carrosobj);
document.write(carrosobj.modelo, " ",carrosobj.ano, " ",carrosobj.cor, " ", carrosobj.situacao)

document.write("<hr>Exercício retornar modelos usados: <br>");

let usados = cars2.filter( function(carrin) {
    return carrin.situacao == "Usado";
})

console.table(usados);

