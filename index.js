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
        console.log(returnBase)
        var returnText = text.value
        var typeOption = retornaOpcao(option)
        // var returnText = element.value = text.value
            if(typeOption == 'Cifra de Otavio') {
                 codificador(returnText, element)
            }
            else {
                return console.log(returnText + '' + typeOption)
            }

        

        


    })
}



pegaTexto(input, output, radio, base)