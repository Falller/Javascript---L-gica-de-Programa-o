console.log("=== CALCULADORA IMC ===")

function analisar() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const result = peso / (altura ** 2);

    document.getElementById("resultado").value = result

    if (result < 18.5) {
        document.getElementById("faixa").value = "Magreza"
    } else if (result >= 18.5 && result < 25) {
        document.getElementById("faixa").value = "Saudável"
    } else if (result >= 25 && result < 30) {
        document.getElementById("faixa").value = "Sobrepeso"
    } else if (result >= 30 && result < 35) {
        document.getElementById("faixa").value = "Obesidade Grau I"
    } else if (result >= 35 && result < 40) {
        document.getElementById("faixa").value = "Obesidade Grau II"
    } else {
        document.getElementById("faixa").value = "Obesidade Grau III"
    }
}

