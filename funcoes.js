// Chamando a função e passando o nº com PARAMETRO que desejo ver a tabuada
ricardoCalculeTabuada(3) //Douglas
ricardoCalculeTabuada(9) //Maria F.
ricardoCalculeTabuada(240) //Lima


//criando função para gerar no console a tabuada do nr desejado
function ricardoCalculeTabuada(nr) {
    for (var i = 1; i <= 20; i++) {
        console.log(` ${nr} x ${1 = $nr * i} `)
    }
}

var resultado
resultado = calcularDobro(544075) //Douglas
console.log(resultado)

//declarando a função recebendo o parametro e retornando um valor
function calcularDobro(nr) { //Ricardo
    var dobro = nr * 2
    return dobro // com o comando return "devolve" o valor calculado para a chamada
}


function calcularMedia(nota1, nota2) {
    var soma = nota1 + nota2
    var media = soma / 2
    return media
}

var mediaAluno1 = calcularMedia(9, 7)
console.log(`Média do aluno 1 é ${mediaAluno1}`)
var mediaAluno2 = calcularMedia(5, 3)
console.log(`Média do aluno 2 é ${mediaAluno2}`)


var login = 'admin'
var senha = '123'
var possoAcessar = validarLogin(login, senha)
if (possoAcessar == true) {
    console.log('Voce pode acessar o sistema')
} else {
    console.log('Voce nao pode acessar o sistema')
}


function validarLogin(login, senha) {
    if (login == '' || senha == '') {
        return false
    }
    if (login == 'admin' && senha == '123') {
        return true
    } else {
        return false
    }
}






function calcular() {
    var aluno = document.getElementById("nome").value
    var valor1 = document.getElementById("num1").value
    var valor2 = document.getElementById("num2").value

    var soma = (Number(valor1) + Number(valor2)) / 2

    document.getElementById("resultado").innerHTML +=`O aluno ${aluno} tirou notas ${valor1} e ${valor2} sua média foi ${soma}<br>`

    if (soma >= 7) {
        document.getElementById("Passou").innerHTML = `PASSOU DE ANO`
    } else{
        document.getElementById("Passou").innerHTML = `NÃO PASSOU`   
    }
}