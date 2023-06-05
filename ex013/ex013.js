function sortear() {

    var meses = parseInt(Math.random() * 13) + 1
    var nom = document.getElementById("nome").value

    switch(meses) {
        case 1:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Janeiro <img src="si.png">`
            break
        case 2:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Fevereiro <img src="si.png">`
            break
        case 3:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Março <img src="si.png">`
            break
        case 4:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Abril <img src="si.png">`
            break
        case 5:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Maio <img src="si.png">`
            break
        case 6:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Junho <img src="si.png">`
            break
        case 7:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Julho <img src="si.png">`
            break
        case 8:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Agosto <img src="si.png">`
            break
        case 9:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Setembro <img src="si.png">`
            break
        case 10:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Outubro <img src="si.png">`
            break
        case 11:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Novembro <img src="si.png">`
            break
        case 12:
            document.getElementById("resultado").innerHTML = `${nom}, você vai se casar no mês de Dezembro <img src="si.png">`
            break
        default:
            document.getElementById("resultado").innerHTML = `${nom}, você não vai se casar Voce nao vai casar <img style="height: 235px;" src="no.png">`
            break
    }

}
