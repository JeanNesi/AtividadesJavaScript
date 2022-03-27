function botao(){ /*Quando o botão é pressionado chama está função*/
    var peso = document.querySelector(".peso").value; /*Armazeno na variável o peso digitado no input do HTML*/
    var altura = document.querySelector(".altura").value; /*Armazeno na variável a altura digitada no input do HTML*/

    var imc = parseFloat(peso) / (parseFloat(altura) ** 2); /*Faço a formúla do IMC*/
    var arredondado = parseFloat(imc.toFixed(2)); /*Arredondo o resultado o IMC, deixando apenas com 2 casas decimais*/

    /*Verificação dos dados*/
    if(imc <= 0){ 
        document.querySelector(".tabela").innerHTML = "Valores Invalidos";/*Como não existe IMC menor que zero, exibe "Valor inválido"*/
        document.querySelector(".resultado").innerHTML = ""; /*Deixa a classe do HTML vazia*/
    }
    else if(imc < 18){
        document.querySelector(".tabela").innerHTML = "Você está abaixo do peso"; /*Manda para a classe do HTML*/
        document.querySelector(".resultado").innerHTML = arredondado; /*Mostra o valor do IMC arredondado*/
    }
    else if(imc < 25) {
        document.querySelector(".tabela").innerHTML = "Você está no peso normal"; /*Manda para a classe do HTML*/
        document.querySelector(".resultado").innerHTML = arredondado; /*Mostra o valor do IMC arredondado*/
    }
    else if(imc >= 25){
        document.querySelector(".tabela").innerHTML = "Você está acima do peso"; /*Manda para a classe do HTML*/
        document.querySelector(".resultado").innerHTML = arredondado; /*Mostra o valor do IMC arredondado*/
    }
}