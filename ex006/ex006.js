function calcular() {
    // receber valor 1 
    var valor1 = document.getElementById("num1").value
    // receber valor 2
    var valor2 = document.getElementById("num2").value
    // calcular e guardar o valor da soma de valor1 e valor2 
    var soma = Number(valor1) + Number(valor2)
    // calcular e guardar o valor da subtração de valor1 e valor2
    var subtracao = valor1 - valor2
    // ...
    var multiplicacao = valor1 * valor2

    var divisao = valor1 / valor2

    var porcento = valor1 % valor2

    var expoencial = valor1 ** valor2
    // exibir todos os resultados no elemento do paragrafo
    document.getElementById("resultado").innerHTML += `${valor1} + ${valor2} = ${soma} <br>` 
    document.getElementById("resultado").innerHTML += `${valor1} - ${valor2} = ${subtracao} <br>` 
    document.getElementById("resultado").innerHTML += `${valor1} * ${valor2} = ${multiplicacao} <br>` 
    document.getElementById("resultado").innerHTML += `${valor1} / ${valor2} = ${divisao} <br>` 
    document.getElementById("resultado").innerHTML += `${valor1} % ${valor2} = ${porcento} <br>` 
    document.getElementById("resultado").innerHTML += `${valor1} ** ${valor2} = ${expoencial} <br>` 
}

function limpar() {
    document.getElementById("resultado").innerHTML = "" 
}