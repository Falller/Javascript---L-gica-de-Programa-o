console.log("===COMPARAÇÃO===")
function comparar() {
        //entrada (captura) de dados
        const entrada1 = parseFloat(document.getElementById("entrada1").value);
        const entrada2 = parseFloat(document.getElementById("entrada2").value);
        const operador = document.getElementById("operador").value;
    
//  console.log(entrada1, entrada2, operador);
    
        //processamento 
        if(operador == "maior") {
            resultado = entrada1 > entrada2;
        } else if (operador == "menor") {
            resultado = entrada1 < entrada2;
        } else if (operador == "maiorigual") {
            resultado = entrada1 >= entrada2;
        } else if (operador == "menorigual") {
            resultado = entrada1 <= entrada2;
        } else if (operador == "igual") {
            resultado = entrada1 == entrada2;
        } else if (operador == "igual2") {
            resultado = entrada1 === entrada2;
        } else {
            resultado = entrada1 != entrada2;
        }
    
//   console.log("Resultado: ", resultado);
    
        //saída dos dados
        document.getElementById("resultado").value = resultado;
}