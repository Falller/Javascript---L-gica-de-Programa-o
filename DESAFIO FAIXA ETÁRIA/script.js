console.log("=== ANALISAR FAIXA ETÁRIA")

function analisar() {

    const idade = parseFloat(document.getElementById("idade").value);

    if (idade < 12) {
        document.getElementById("resposta").value = "Você é uma criança!";
    } else if (idade >= 12 && idade < 18){
        document.getElementById("resposta").value = "Você é um Adolescente"
    } else if (idade >= 18 && idade < 65){
        document.getElementById("resposta").value = "Você é um Adulto!";
    } else if (idade >=65 && idade < 99){
        document.getElementById("resposta").value = "Você é um Idoso!";
    } else {
        document.getElementById("resposta").value = "O terror do INSS tá vivo ainda!";
    }
    
}

function zerar() {
    document.getElementById("idade").value = "";
    document.getElementById("resposta").value = "";
}