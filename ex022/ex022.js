var filmes = []
var link = []

function botaoFilmes() {
    var nome = document.getElementById("nome").value
    var img = document.getElementById("img").value  
    filmes.push(nome)
    link.push(img)
    document.getElementById('resultado').innerHTML = ''

    for ( var i = 0; i < filmes.length ; i++) {
        document.getElementById('resultado').innerHTML += `<div class="separa"> <br> ${filmes[i]} <br> <img src="${link[i]}" class='imagem'></div>`
    }

}

function sortearFilmes() {
    var i = parseInt(Math.random() * filmes.length)
    document.getElementById('resultado').innerHTML = `<div class="separa"> <br> ${filmes[i]} <br> <img src="${link[i]}" class='imagem'></div>`
}

