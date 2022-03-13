const carros = [];
let id_cont = 1;

function adicionar () {
    
    let carro = {
        id: id_cont++,
        modelo: "",
        ano: "",
        cor: "",
        situacao: "",
        preco: "",
    }

    
    carro.modelo = document.getElementById("modelo").value;
    carro.ano = parseInt(document.getElementById("ano").value);
    carro.cor = document.getElementById("cor").value;
    carro.situacao = document.getElementById("situacao").value;
    carro.preco = parseFloat(document.getElementById("preco").value).toFixed(2);

    carros.push(carro);

    //criação de um array para armazenar os preços
    let prices = [];

    //fazendo push dos preços para o array
    carros.forEach(function (valor){
        prices.push(parseFloat(valor.preco));
    })

    console.log(prices);

    // usando reduce para somar todos os valores do array
    let total_preco = prices.reduce(function(soma, atual){
        console.log(atual);
        console.log(arguments)
        return soma + atual;
        
    });

    console.log("Preço total " + total_preco);

 //   console.table(carros);

    //mostrar na tela numa tabela

    const tabela = document.getElementById("tabela");

    let dados = carros.map( function(carro){
           return `<tr>
                <td style="text-align: center;">${carro.id} </td>
                <td style="text-align: center;">${carro.modelo} </td>
                <td style="text-align: center;">${carro.ano}</td>
                <td style="text-align: center; background-color: ${carro.cor}"></td>
                <td style="text-align: center;">${carro.situacao}</td>
                <td style="text-align: center;"> R$ ${carro.preco}</td>
            </tr>`;
    });

    tabela.innerHTML = dados.join("");

    const rodape = document.getElementById("rodape");

    rodape.innerHTML = `
    <tr>
        <td colspan="5" style="text-align: end;font-size: 25px; font-weight: bold">Valor total dos veículos Cadastrados:</td>
        <td style="text-align: center;font-size: 25px; font-weight: bold">R$ ${total_preco.toFixed(2)}</td>
    </tr>`
    
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("cor").value = "";
    document.getElementById("preco").value = "";
    
};