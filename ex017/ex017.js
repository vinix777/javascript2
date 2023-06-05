function calcular() {

    document.getElementById("resultado").innerHTML = ``
    var valorInicial = Number(document.getElementById("num1").value)
    var valorFinal = Number(document.getElementById("num2").value)
    

    var contador = valorInicial

    while (contador <= valorFinal) {

        if (contador % 2 != 0) {
            document.getElementById("resultado").innerHTML += `${contador} <br>`
        }
        contador++
    }
}
