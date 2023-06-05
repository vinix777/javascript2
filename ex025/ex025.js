
var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null) {
    listaUsuarios = []
}

exibirUsuarios()
function cadastro() {
    var nome = document.getElementById('nome').value
    var usuario = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value
    var confirmarSenha = document.getElementById('confirmeSenha').value

    var possoCadastrar = validarCadastro(nome, usuario, senha, confirmarSenha)
    if (possoCadastrar == false) {
        return
    }
    var login = {
        nome: nome,
        usuario: usuario,
        senha: senha
    }

    listaUsuarios.push(login)

    localStorage.setItem('bdUsuarios', JSON.stringify(listaUsuarios))
    exibirUsuarios()

    window.location.href = 'login.html'
}

function exibirUsuarios() {
    document.getElementById("resultado").innerHTML = ''

    listaUsuarios.forEach((item, pos) => {
        document.getElementById('resultado').innerHTML +=
            `<div><br>
                <p><b>Nome:</b>  ${item.nome} - <b>Login:</b> ${item.usuario}
                <img src='excluir.svg' onclick='excluirUsuario(${pos})'></p>
            </div>`
    })
}

function excluirUsuario(pos) {
    listaUsuarios.splice(pos, 1)
    localStorage.setItem('bdUsuarios', JSON.stringify(listaUsuarios))
    exibirUsuarios()
}


function validarCadastro(nome, usuario, senha, confirmarSenha) {
    if (nome == '' || usuario == '' || senha == '' || confirmarSenha == '') {
        alert("preencha todos os campos")
        return false
    } else {
        if (senha == confirmarSenha) {
            return true
        } else {
            alert("Verifique se as senhas estão corretas!")
            return false
        }
    }
}


function limpar() {
    var confirmarExclusao = confirm('Deseja realmente excluir este usuario?')
    if (confirmarExclusao == true) {
        listaUsuarios = []
        localStorage.setItem('bdUsuarios', JSON.stringify(listaUsuarios))
        exibirUsuarios()
    }
}



// Login:

function botaoEntrar() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if (validarUsuario(login, senha)) {
        alert('Bem vindo ao sistema')
    } else {
        alert('VERIFIQUE SEU USUÁRIO E SENHA OU SE CADASTRE')
    }
}

function validarUsuario(login, senha) {
    var encontrado = false
    listaUsuarios.forEach((item, i) => {
        if (item.usuario == login && listaUsuarios[i].senha == senha) {
            encontrado = true
        }
    })
    return encontrado
}

function botaoCadastrar() {
    location.href = 'ex025.html'
}






