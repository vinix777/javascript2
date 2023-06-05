function login() {
    var usuario = document.getElementById("usuario1").value
    var senha = document.getElementById("senha1").value

    if (usuario == "adm" && senha == "123") {
        document.getElementById("resultado").innerHTML = `<b class="pode">Você entrou na sua conta </b>`
    } else{
        document.getElementById("resultado").innerHTML = `<b class="naopode">Usuário ou senha incorreta </b>`
    }
}