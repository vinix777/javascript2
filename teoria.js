/*
comentarios em multiplas linhas
*/

//comentario em uma unica linha

//0 alert é utilizado para escrever uma mensagem em popup
//alert("Olá mundo!!!")

//No console conseguimos visualizar informações
//sem exibir na pagina
console.log("Olá mundo!!! Utilizando Console!")

function BotaoTeste() {
    alert("Você clicou no botão")
}

//Tipo de exibição de mensagem no console
console.error("Essa é uma mensagem de erro")
console.warn("Esta é uma mensagem de alerta")
console.info("Esta é uma mensagem de informação")

//declarando variaveis
//string - conjunto de caracteres - declarar com "" ou ''
var nome = "Vinicius"
var sobrenome = "Resende"
//number - Todo numero em JS é dp tipo Number - Declarar sem ""
var idade = 16
//boolean - Somente recebe true ou falso
var aprovado = true

console.log(typeof nome) //Comando  typeof para saber o tipo do dado

console.log(nome + '' + sobrenome) //Concatenando string com o +
//Se utilizarmos o + com string ele concatena se utilizar com number soma
var n1 = 10
var n2 = 25
console.log(n1 + n2)
var n3 = "10"
var n4 = "25"
console.log(n3 + n4) //Ira concatenar "juntar" as 2 variaveis ("1025")

n1 = n2 //Uma variavel pode receber o valor de outra variavel
console.log("n1 = " + n1 + 'e o n2 = ' + n2)

var salario = 1290.85 //Para atribuir um valor decimal utilizar . não ,
salario = salario + 200 //Posso tambem somar a variavel com ela mesmo
console.log(salario)
salario += 200 //Representação mais simplificada da expressão acima
console.log(salario)

//Antigamente para juntar texto e variaveis faziamos assim
console.log('Olá, ' + nome + ' voce tem ' + idade + 'anos e recebe R$ ' + salario)
//Hoje utilizamos o TemplateString forma mais simples
console.log(`Olá, ${nome} voce tem ${idade} anos e recebe R$ ${salario}`)

function BotaoNome() {
    var nome2 = prompt('Qual é o seu nome?')
    confirm(`Olá ${nome2}, entendeu JS?`)
}

function BotaoSomar() {
    //Recebendo valor1 de um prompt
    var valor1 = prompt("informe o valor 1")
    //Recebendo valor2 de um prompt
    var valor2 = prompt("informe o valor 2")
    //variavel soma recebendo valor1 + valor2
    //Convertendo a variavel valor1 e 2 de string para number
    //posso utilizar preseInt() parseFloat() ou number()
    var soma = Number(valor1) + Number(valor2)
    //Exibir em um alert o valor de soma
    alert(soma) //1010
    //alert(`A soma dos dois numeros é: ${soma}`) //"1010"
    document.getElementById("resultadoSoma").innerHTML +=
        `<br> A soma dos numeros ${valor1} e ${valor2} é = ${soma}`
}

function botaoCidade() {
    var nomeCidade = document.getElementById("cidade").value
    document.getElementById("resultadoCidade").innerHTML = nomeCidade
}

//operadores aritméticos e ordem de precedência
//Operador de soma +
var opSoma = 5 + 2
console.log(opSoma)
var opSubtracao = 5 - 2 //Operador de subtração -
console.log(opSubtracao)
var opMultiplicacao = 5 * 2 //Operador de multiplicação *
console.log(opMultiplicacao)
var opDivisao = 5 / 2 //Operador de divisão /
console.log(opDivisao)

var opExpoenciacao = 5 ** 2 //Operador de exponenciação **
console.log(opExpoenciacao)
var opResto = 5 % 2 //Operador de resto da divisão % 
console.log(opResto)

//ordem de precedencia
var ordemPrecedencia1 = 5 + 3 / 2
console.log(ordemPrecedencia1)
var ordemPrecedencia2 = (5 + 3) / 2
console.log(ordemPrecedencia2)
/* 1º ()
   2º **
   3º * /
   4º %
   5º + -
*/
//constantes
const pi = 3.14
// pi = 3 - Se o valor for alterado dará erro no JavaScript



//Auto atribuição
var n = 3
n = n + 3 // a variavel recebe ela mesmo + 3
n += 3   // quer dizer o mesmo que a expressao acima

n++ // quando precisamos somar + 1 ao valor da variavel
n-- // quando precisamos subtrair -1 ao valor da variavel

//Operadores Relacionais
var n1 = 5
var n2 = 6
console.log(n1 > n2) // > Maior que
console.log(n1 < n2) // < Menor que
console.log(n1 >= n2) // >= Maior ou igual que
console.log(n1 <= n2) // <= Menor ou igual que
console.log(n1 == n2) // == Igual
console.log(n1 != n2) // != Não igual - Diferente

//Estruturas condicionais 
if (n1 > n2) {     // verificando a condição entre parenteses
    // se a condição for verdadeira "entra" nesse bloco
    console.log("O n1 é maior que o n2")
}
else {
    // Se a condição Não for verdadeira "entra" nesse bloco ELSE
    console.log("O n1 nao é maior que o n2")
}
//exemplo de condição
var minhaIdade = 15
if (minhaIdade >= 16) {
    console.log("Voce pode votar")
}

else {
    console.log("Voce nao pode votar")
}

//operadores logicos
// && representa o E
var login = "adm"
var senha = "123"
//para entrar na condição TRUE as 2 condições precisa ser verdadeiras
if (login == "adm" && senha == "123") {
    //executa esse bloco quando as condições são TRUE
} else {
    //executa esse bloco se pelo menos 1 condição for FALSE
}

var media = 6
//operador OU -> || (pipe)
//Para entrar na condição TRUE pelo menos 1 condição precisa ser verdadeira
if (media == 6 || media == 5) {
    //executa esse bloco quando 1 condição é TRUE pelo menos
} else {
    //aqui entra se todas as condições forem falsas
}
//Estruturas condicionais encadeadas
if (media >= 7) {
    console.log("APROVADO")
} else if (media >= 5) { // Podemos fazer um novo if junto com else
    console.log("RECUPERAÇÃO")
} else if (media < 5) {
    console.log("REPROVADO")
}

//debugger
//Podemos utilizar o debugger para analizar o codigo linha a linha

//exit
//quando queremos para de executar uma função do JS utilizamos o exit


//Para sortearmos um valor aleatorio utilizamos o Math.random()
//o Math.random retorna um numero decimal e precisamos multiplicar
//pelo nr maximo que desejamos e somar 1 quando necessario
//o parseInt utilizamos para obter apenas a parte inteira do numero
var nrSorteado = parseInt(Math.random() * 100) + 1
console.log(nrSorteado)


//switch case
//é como se fosse varios if else de forma mais simples
var diaSemana = 3
switch (diaSemana) {
    case 1:
        console.log("Hoje é: Domingo")
        break    //para o switch case e não verifica as outras opções
    case 2:
        console.log("Hoje é: Segunda")
        break
    case 3:
        console.log("Hoje é: Terça")
        break
    case 4:
        console.log("Hoje é: Quarta")
        break
    case 5:
        console.log("Hoje é: Quinta")
        break
    case 6:
        console.log("Hoje é: Sexta")
        break
    case 7:
        console.log("Hoje é: Sabado")
        break
    case 8:
        console.log("Dia invalido")
        break
}


//Laços de repetição WHILE (que quer dizer enquanto)
//while (condição)
//enquanto a condição do parenteses for verdadeira
//continua repetindo o codigo do bloco
var nrVidas = 5
while (nrVidas > 0 ) {
    console.log (`Voce ainda tem ${nrVidas}`)
    nrVidas--
}

//Verigicando se numero é par com while
var contador = 1 //iniciando o contador de vezes que ira executar
while (contador <= 10) { //Enquanto a condição for verdadeira
    if (contador % 2 == 0){ //condição para o contador for par
        console.log (`${contador} é par`)
    } else {
        console.log (`${contador} é impar`)
    }
    contador++ //Adicionar +1 ao contador para nao ficar em loop
}

for (var cont = 1; cont <= 5; cont++){
    console,log(cont)
}
//For - Laço de repetição
// 1ª expressão var i = 1
// (aqui eu indico o controle de vezes)
// 2ª expressão i <= 10
// (aqui nós verificamos a condição para se manter no loop)
// 3ª expressão i++
// (aqui acrescentamos na variavel +1 vez)
// EXibindo
for (let i = 1; i <= 10; i++) {
    console.log(i)
}