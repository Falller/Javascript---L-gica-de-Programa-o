console.log("===REPETIÇÃO===")

let num = 0;

while (num <= 10) {
    document.write(num, " ");
    num ++;

}
document.write("<hr>");
document.write("<h3>Números 50 - 1</h3>");

let numex = 50;


while (numex >= 0) {
    document.write(numex, " ");
    numex --;
    if (numex % 10 == 0) {
        document.write("<br>")
    } 
    
}
document.write("<hr>");
document.write("<h3>Números Pares - 0 a 100</h3>");

let numex3 = 0;

while (numex3 <= 100) {
    document.write(numex3, " ");
    numex3 += 2;
    if (numex3 % 20 == 0) {
        document.write("<br>")
    } 
      
}

document.write("<hr>");
document.write("<h3>Números Ímpares - 0 a 100 com separação</h3>");

let numex4 = 99;

while (numex4 >= 1) {
    if (numex4 != 1) {
        document.write(numex4, " - ");
    } else {
        document.write(numex4);
    }
    numex4 -= 2;
}

document.write("<hr>");
document.write("<h3>While sem condição</h3>");

//let loop = true;
//let numero;

//while (loop) {
//    numero = prompt("Digite um número: ");
//    console.log(numero);

//   if (numero != 0) {
//        document.write(numero, " ");
//   } else {
//        loop = false;
//    }
//}
document.write("<hr><h2>FOR</h2>")
// FOR 

//NÚMEROS 1 A 10
document.write("<h3>Números 1 a 10</h3>")
//for (valor inicial, condição lógica, incremento)
for (let cont = 1; cont <= 10; cont++) {
    document.write(cont, " ");
}

document.write("<hr>");

function asterisco() {
    const ast = parseInt(document.getElementById("asteriscos").value);

    for(let ini = 1; ini <=ast; ini++) {
        document.write("*");
    }
}

//Desafio 1

//**********
document.write("DESAFIO 1 <br>")
//**********
//**********
//**********
//**********
//**********
for (let lin = 1; lin <= 5; lin ++) {
    document.write("*");
    for(let col = 1; col <=10; col++) {
        document.write("*")
    }
    document.write("<br>")
}

document.write("<hr>DESAFIO 2 <br>")
for (let lin=1; lin<=10; lin++) {
    for(let col = 1; col <=lin; col++) {
        document.write("*")
        
    }
    document.write("<br>")
}

//DESAFIO - 3
// *=================*
//  *===============*
//   *=============*  
//    *===========*
//     *=========*
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *
//&nbsp
document.write("<hr>DESAFIO 3 <br>")
for (let lin=1; lin<=10; lin++) {
    for(let col = 1; col <=lin; col++) {
        document.write("*")
        
    }
    document.write("<br>")
}
