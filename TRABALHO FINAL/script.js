const carros = [];

function adicionar () {
    
    let carro = {
        modelo: "",
        ano: "",
        cor: "",
        situacao: "",
    }

    carro.modelo = document.getElementById("modelo").value;
    carro.ano = parseInt(document.getElementById("ano").value);
    carro.cor = document.getElementById("cor").value;
    carro.situacao = document.getElementById("situacao").value;

    carros.push(carro);


    console.table(carros);

    //mostrar na tela numa tabela

    const tabela = document.getElementById("tabela");

    let dados = carros.map( function(carro){
           return `<tr>
                <td>${carro.modelo} </td>
                <td>${carro.ano}</td>
                <td>${carro.cor}</td>
                <td>${carro.situacao}</td>
            </tr>`;
    });

    tabela.innerHTML = dados.join("");

    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("cor").value = "";
}