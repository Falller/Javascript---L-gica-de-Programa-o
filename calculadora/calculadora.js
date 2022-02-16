console.log("===CALCULADORA===");

function calcular() {
    //entrada (captura) de dados
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    console.log(num1, num2);

    //processamento 
    const resultado = num1 + num2;

    console.log("Resultado: ", resultado);

    //saída dos dados
    document.getElementById("resultado").value = resultado;
}

function zerar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").value = "0";
}