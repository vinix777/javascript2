function calcular() {
    var pessoa = document.getElementById("nome").value
    var valor1 = document.getElementById("num1").value

    if (valor1 >= 18) {
        document.getElementById("parabens").innerHTML = `<b class="pode">PARABÉNS ${pessoa}, você pode tirar CNH </b>`
    } else{
        document.getElementById("parabens").innerHTML = `<b class="naopode">Você não pode tirar CNH </b>`   
    }
    
}