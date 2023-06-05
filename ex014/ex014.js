function sortear() {
    var nrVezes = 1
    document.getElementById("resultado").innerHTML = ""

    while (nrVezes <= 6) {

        var nrVez = parseInt(Math.random() * 60) + 1
        document.getElementById("resultado").innerHTML += ` ${nrVez} `
        nrVezes++
    }
}