function botao(){ /*Quando o botão é pressionado chama está função*/
    var valor = document.querySelector(".valor").value; /*Armazeno na variável o valor digitado no input do HTML*/

    /*Verificação dos dados*/
    if(valor % 10 !== 0){ /*Só é possível sacar valores que sejam divisiveis por 10, então se o resto diferente de 0, não é possível sacar o valor*/
        document.querySelector(".invalido").innerHTML = "Valor inválido"; /*Mando a mensagem de erro para a classe do HTML*/
        document.querySelector(".n100").innerHTML = ""; /*Mando valor vazio para a classe do HTML*/
        document.querySelector(".n50").innerHTML = ""; /*Mando valor vazio para a classe do HTML*/
        document.querySelector(".n20").innerHTML = ""; /*Mando valor vazio para a classe do HTML*/
        document.querySelector(".n10").innerHTML = ""; /*Mando valor vazio para a classe do HTML*/
    }
    else{ /*Se o valor for divisível por 10*/
        var n100 = parseInt(valor / 100); /*Divido o valor, para descobrir o número de notas*/
        var resto = valor % 100; /*Vejo se o valor é divisível por 100*/

        var n50 = parseInt(resto / 50); /*Divido o resto, para descobrir o número de notas*/
        var resto = resto % 50; /*Vejo se o resto do valor é divisível por 50*/

        var n20 = parseInt(resto / 20); /*Divido o resto valor, para descobrir o número de notas*/
        var resto = resto % 20; /*Vejo se o resto do valor é divisível por 20*/

        var n10 = parseInt(resto / 10); /*Divido o resto, para descobrir o número de notas*/
        var resto = resto % 10; /*Vejo se o resto do valor é divisível por 10*/

        document.querySelector(".n100").innerHTML = n100; /*Mando a quantiade de notas de R$100 para a classe do HTML*/
        document.querySelector(".n50").innerHTML = n50; /*Mando a quantiade de notas de R$50 para a classe do HTML*/
        document.querySelector(".n20").innerHTML = n20; /*Mando a quantiade de notas de R$20 para a classe do HTML*/
        document.querySelector(".n10").innerHTML = n10; /*Mando a quantiade de notas de R$10 para a classe do HTML*/
        document.querySelector(".invalido").innerHTML = ""; /*Mando um valor vazio para a classe do HTML*/
    }
}