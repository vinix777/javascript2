function botaoFilmes() {
    var filmes = ['interestelar', 'Star Wars', 'Harry Poter', 'Super Mario World', 'Vingadores', 'Barbie']

    for ( var i = 0; i < filmes.length ; i++) {
        document.getElementById('resultados').innerHTML += `Posição no vetor ${i} - Filme ${filmes[i]} <br>`
    }
}