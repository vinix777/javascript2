var listaCarros = []

//Declarando um objeto e informando os atributos
//Todo objeto declaro com { }
var carro = {
    ano: '2020',
    modelo: 'Golf GTI',
    marca: 'VW'
}

//Para exibir o atributo do objeto faço da seguinte forma objetol.atributo
console.log (`${carro.ano} - ${carro.modelo}`)

listaCarros.push(carro)
console.log (listaCarros.length) // 1 - Só existe 1 item

//Novo objeto - novo carro
carro = {
    ano: '2022',
    modelo: 'onix',
    marca: 'Chevrolett'
}

listaCarros.push(carro)
console.log (listaCarros)

for (var andar in listaCarros){
    console.log (carro.modelo)
}
