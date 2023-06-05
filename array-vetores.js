//Declarando um array vazio
var meuVetor = []

//Criando vetores com dados
var numeros = [4, 1, 18, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [20, 'SESI', true]

//Acessando os dados de um vetor
console.log( nomes[1] )
console.log( novoVetor[1] )

//Verificando o tamanho de um vetor
console.log(numeros.length)

//Indice
var frutas = ['Maçã', 'laranja', 'pera', 'morango', 'uva']
//faço um for para percorrer todo o tamanho do vetor
for (var i=0; i < frutas.length; i++) {
    //coloco o i no indice das frutas para pegar o valor de cada indice do vetor
    console.log ( frutas[i])
}

//for in -> não preciso inicializar uma variavel de contador do loop
for (var indice in novaListaFrutas){
    console.log (indice + ' - ' + novaListaFrutas[indice])
}

//Método forEach de um vetor percorre e retorna todos os elementos do vetor
novaListaFrutas.forEach( fruta => {
    console.log (fruta)
} )


// o método foEach - significa para cada item do vetor //
//dentro do parenteses colocamos a variavel que irá
//receber o conteudo de cada linha do vetor
//e com o => {} informamos o bloco que irá executar para cada linha
frutas.forEach ( item => {
    console.log (' item pelo forEach ', item)
} )

frutas.forEach ( ( item, pos) => {
    console.log (' item pelo forEach com posição ', pos ,item)
} )