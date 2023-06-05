function calcular() {

    var nrVezes = 1
    document.getElementById("resultado").innerHTML = ""

    while (nrVezes <=10) {
        var valor1 = document.getElementById("num1").value
        var multiplicacao = Number(valor1) * (nrVezes)
        document.getElementById("resultado").innerHTML += `${valor1} x ${nrVezes} = ${multiplicacao} <br>`
        nrVezes++
    }
}