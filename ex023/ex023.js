function calcular() {
    var aluno = document.getElementById("nome").value
    var valor1 = document.getElementById("num1").value
    var valor2 = document.getElementById("num2").value

    if (validarNotas(nota1, nota2) == false)
        return

    var media = calcularMedia(nota1, nota2)

    exibirAprovacao(media)
}

function validarNotas(nota1, nota2) {
    if (nota1 > 10){
        alert ("nota 1 não pode ser maior que 10")
        return false
    }
    if (nota > 10) {
        alert ("Nota 1 nçao pode ser maior ")
    }
}

function calcularMedia (nota1, nota2) {
    var mediaCalculada = (Number(nota1) + Number(nota2)) / 2
    return mediaCalculada
}

function exibirAprovacao (media) {
    if (media >= 7) {
        document.getElementById('resultado')
    }
}