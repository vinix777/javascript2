function calcular() {
    document.getElementById("resultado").innerHTML = ""

    for (var nrVezes = 1; nrVezes <=10; nrVezes++) {
        var valor1 = document.getElementById("num1").value
        var multiplicacao = Number(valor1) * (nrVezes)
        document.getElementById("resultado").innerHTML += `${valor1} x ${nrVezes} = ${multiplicacao} <br>`
    }
}