console.log("=== CONDICIONAIS ===");

function verificaif() {
//entrada
    const aluno = document.getElementById("aluno").value;
    const nota = parseFloat(document.getElementById("nota").value);

    console.log(aluno, nota);

    //processamento

    let resp = null;

    if (nota >= 6) {
        resp = "Aprovado!"
    } 
    
    if (nota < 6 && nota >=4) {
        resp = "Recuperação!"
    }

    if (nota < 4) {
        resp = "Reprovado!"
    }

    //saída
    document.write(
        `Exemplo feito com IF <br>
        Aluno: ${aluno} <br>
        Nota: ${nota} <br>
        Situação: ${resp}`);
}

function verificaifelse() {
    const aluno = document.getElementById("alunoifelse").value;
    const nota = parseFloat(document.getElementById("notaifelse").value);

    console.log(aluno, nota);

    //processamento

    let resp = null;

    if (nota >= 6) {
        resp = "Aprovado!"
    } else if (nota < 4) {
        resp = "Reprovado!"
    } else {
        resp = "Recuperação!"
    }

    //saída
    document.write(
        `Exemplo feito com IF ELSE <br>
        Aluno: ${aluno} <br>
        Nota: ${nota} <br>
        Situação: ${resp}`);
}

function verificascase() {
    const dia = parseFloat(document.getElementById("diasemana").value);

    console.log(dia);

    //processamento

    let resp = null;

    switch (dia) {
        case 1:
            resp = "Domingo!";
            break;
        case 2:
            resp = "Segunda!";
            break;
        case 3:
            resp = "Terça!";
            break;
        case 4:
            resp = "Quarta!";
            break;
        case 5:
            resp = "Quinta!";
            break;
        case 6:
            resp = "Sexta!";
            break;
        case 7:
            resp = "Sábado!";
            break;

        default:
            document.write("Resposta não aceita!")
        break;
    }
    console.log(resp);
    //saída
    document.write(
        `Exemplo feito com SWITCH / CASE <br>
        O dia digitado foi ${dia} e corresponde a ${resp}`);
}


