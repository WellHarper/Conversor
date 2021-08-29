var button = document.getElementById('cript')
var input = document.getElementById('inputText')
var output = document.getElementById('outputText')
var radio = Array.from(document.getElementsByName('tipo'))


function retornaOpcao(option) {
    
    var i = 0
    var value = ''

    while(i <= option.length) {


        if(option[i].checked == true) {
            return option[i].value
        }

        i++

    }
  
}

function retornaTexto (text, element, option) {
    console.log(option)
    var typeOption = retornaOpcao(option)
    var returnText = element.value = text
    return console.log(returnText + " " + typeOption)
}

function pegaTexto(text, element, option) {


    button.addEventListener('click', ()=> {

        console.log(option)

        retornaTexto(text.value, element, option)




    })
}



pegaTexto(input, output, radio)