
function dobro() {
    var valor1 = document.getElementById("num1").value
    var dobro = Number(valor1) * 2

    var metade = Number(valor1) / 2

    document.getElementById("resultado").innerHTML += `O dobro de ${valor1} é igual a ${dobro} e a metade é ${metade} <br>` 
}

function limpar() {
    document.getElementById("resultado").innerHTML = "" 
}
