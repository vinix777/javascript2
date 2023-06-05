var nVidas = 0

function mais() {
    var resultados = document.getElementById('resultado')

    resultados.innerHTML = '<img src="Mario.avif" alt="" class="mario-img">'
    nVidas++
    for (var index = 1; index <= nVidas; index++) {
        resultados.innerHTML += "<img src='coracao.png' style='height: 40px; margin-left: 5px; '> "
    }
}
function menos() {
    var resultados = document.getElementById('resultado')

    resultados.innerHTML = '<img src="Mario.avif" alt="" class="mario-img">'
    nVidas--
    for (var index = 1; index <= nVidas; index++) {
        resultados.innerHTML += "<img src='coracao.png' style='height: 40px; margin-left: 5px; '> "
    }

    if (nVidas <= 0) {
        resultados.innerHTML = '<img src="Mario_(Defeated)_-_Super_Mario_Sticker.webp"> '
    }
}