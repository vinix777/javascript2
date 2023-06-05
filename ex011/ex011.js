function voto() {
    var nome = document.getElementById("nome1").value
    var idade = document.getElementById("idade1").value

    if (idade >= 16 && idade < 18 || idade > 70) {
        document.getElementById("resultado").innerHTML = `${nome}, você não é obrigado a votar`
    } else if(idade >= 18 && idade < 70) {
        document.getElementById("resultado").innerHTML = `${nome}, você é obrigado a votar` 
    } else if(idade < 16) {
        document.getElementById("resultado").innerHTML = `${nome}, você ainda não pode votar`
    }
}
