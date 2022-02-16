//armazenando os dados (EcmaScript 5 - até 07/2015)

var nome = "";
var email = "";
var telefone = "";

//executando instruções
console.log("Nome:", nome);
console.log("Email:", email);
console.log("Telefone:", telefone)

nome = prompt("Escreva seu nome: ")
email = prompt("Escreva seu e-mail: ")
telefone = prompt("Escreva seu telefone: ")

document.write("<hr><p>Nome: ", nome, "</p>");
document.write("<p>Email: ", email, "</p>");
document.write("<p>Telefone: ", telefone, "</p><hr>");