var button = document.getElementById('cript')
var input = document.getElementById('inputText')
var output = document.getElementById('outputText')
var radio = Array.from(document.getElementsByName('tipo'))
var base = document.getElementById('base')


// Base64
function codificador(mensagem, element){
    var mensagemCodificada = btoa(mensagem)
    
    return element.value = mensagemCodificada

}


//Cifra de César Léo
function cifrador(mensagem, base, element) {
    let mensagemArr = mensagem.split('')
    let incremento = Number(base)
    console.log(incremento)
    let mensagemCifrada = []
    let codificadorArr = []


    for (let i = 0; mensagemArr.length > i; i++) {
        if (mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <= 90) {
            console.log(mensagemArr[i].charCodeAt() - 65)
            let teste = ((mensagemArr[i].charCodeAt()) - 65 + incremento) % 26
                
            codificadorArr.push(teste + 65)
        } else if (mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <= 122) {
            console.log(mensagemArr[i].charCodeAt() - 97)
            let teste = ((mensagemArr[i].charCodeAt()) - 97 + incremento) % 26
            
            codificadorArr.push(teste + 97)
        } else {
            codificadorArr.push(mensagemArr[i].charCodeAt())
        }
    }
    for (let j = 0; codificadorArr.length > j; j++) {
        
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
        // console.log(mensagemCifrada)
    }
    // console.log(mensagemCifrada.join(''))
    return element.value = mensagemCifrada.join('')

}






//Criando funções de pegar dados
function retornaOpcao(option) {
    
    var i = 0

    console.log(option)



    while(i <= option.length) {


        if(option[i].checked == true) {
            return option[i].value
        }

        i++

    }
  


}


function pegaTexto(text, element, option, base) {


    button.addEventListener('click', () => {

        var returnBase = base.value
        if(returnBase === '' && typeOption === 'Cifra de César' ) {
            alert('Por Favor, digite um número de base válida')
            return
        }
        console.log(typeof returnBase)
        var returnText = text.value
        var typeOption = retornaOpcao(option)
        // var returnText = element.value = text.value
            if(typeOption == 'Cifra de Otavio') {
                 codificador(returnText, element)
            }
            else {
            // else {
            //     do {
            //         alert('por favor digite uma base diferente de vazia')
            //         break
            //     }
            //     while(returnBase === '')
                cifrador(returnText, returnBase, element)
            }

        

        


    })

}


pegaTexto(input, output, radio, base)