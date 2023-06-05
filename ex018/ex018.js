function geral() {
    var nrVezes = document.getElementById('num1').value
    var resultados = document.getElementById('resultado')

    resultados.innerHTML = ''

    for (let index = 0; index < nrVezes; index++) {
        resultados.innerHTML += "<img src='coracao.png' style='height: 40px; margin-left: 5px; '> "
    }
}