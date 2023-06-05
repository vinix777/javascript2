var nrSorteado = parseInt(Math.random() * 100) + 1
var nrTentativas = 0

function chutar() {
     var nrDigitado = prompt('Qual é o seu chute?')
     nrTentativas++

     if (nrSorteado == nrDigitado) {
        document.getElementById("resultado").innerHTML +=  `<b>PARABÉNS VOCÊ ACERTOU O Nº${nrSorteado} com ${nrTentativas} Tentativas <br>`
     } 
     else if (nrSorteado < nrDigitado) {
        document.getElementById("resultado").innerHTML +=  `Acho que sou um pouco menor do que ${nrDigitado} <br>`
     }
     else if (nrSorteado > nrDigitado) {
        document.getElementById("resultado").innerHTML +=  `Acho que sou um pouco maior do que ${nrDigitado} <br>`
     }
}

function limpar() {
    nrSorteado = parseInt(Math.random() * 100) + 1
    document.getElementById("resultado").innerHTML = ``
    nrTentativas = 0
}