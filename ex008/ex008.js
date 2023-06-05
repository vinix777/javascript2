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
