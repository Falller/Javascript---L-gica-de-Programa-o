console.log("=== LOJA DE CARROS ===")

const carros = [];


function adicionar () {
    let car = document.getElementById("nomecarro").value;

    console.log(car, typeof(car));

    carros.push(document.getElementById("nomecarro").value);

    document.getElementById("nomecarro").value = "";
   document.getElementById("quantidade").textContent = carros.length;
    console.log(carros)

    if(carros.length == 10) {
        carros.forEach(function(valor){
            document.write("<p>- ",valor, "<p>")
        })
    }

    
}

