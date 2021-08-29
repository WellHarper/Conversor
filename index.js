var button = document.getElementById('cript')
var input = document.getElementById('inputText')
var output = document.getElementById('outputText')
var radio = Array.from(document.getElementsByName('tipo'))



function cifrado(){
    var mensagemArr = mensagem.split('')
    var mensagemCifrada = []
    var codificadorArr = []
    
    for (var i = 0; mensagemArr.length > i; i++){
        if (mensagemArr[i] !== ' '){
            codificadorArr.push((mensagemArr[i].charCodeAt()) + incremento)
        }else{
            codificadorArr.push(mensagemArr[i].charCodeAt())
        }
    }
    for (var j = 0; codificadorArr.length > j; j++){
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')

}



//Criando funções de pegar dados
function retornaOpcao(option) {
    
    var i = 0
    

    while(i <= option.length) {


        if(option[i].checked == true) {
            return option[i].value
        }

        i++

    }
  
}


function pegaTexto(text, element, option) {


    button.addEventListener('click', () => {

        

        var typeOption = retornaOpcao(option)
        var returnText = element.value = text.value
        return console.log(returnText + " " + typeOption)




    })
}



pegaTexto(input, output, radio)