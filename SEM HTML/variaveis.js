console.log("=== VARIÁVEIS ===")

// Javascript - Especificação
//ES - Ecma Script
//Até Junho/2015 - ES5 --> var
//de Julho/2015 - ES6 --> let / const

// Padrão ASI - Automatic Semicolon Insert

// Tipos de Dados / Tipos de Variáveis
// Javascript -> Tipagem Dinâmica
// Tipos Primitivos - string, number, boolean, null, undefined

var nome = "Leonardo"; //string
console.log("nome", nome, typeof nome);

const idade = 39; // number
console.log("idade", idade, typeof idade);

const magro = false; //boolean
console.log("magro", magro, typeof magro);

var nula = null;
console.log("nula", nula, typeof nula);

var indefinida;
console.log("indefinida", indefinida, typeof indefinida)

// Diferenças entre var / let / const
// var - permite redeclaração da variável
var nome = 1;
console.log("nome", nome, typeof nome);

//var - permite reatribuição de valor
var nome = false;
console.log("nome", nome, typeof nome);

//let - redeclaração de variável
nome = 5;
console.log("nome", nome, typeof nome);

// const - contante, não aceita reatribuir nem redeclarar
//const idade = 20; // redeclaração sintaxerror

//idade = 20; // reatribuição typeof error



