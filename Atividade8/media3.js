function botao(){ /*Quando o botão é pressionado chama está função*/
    var n1 = document.querySelector(".n1").value; /*Armazeno na variável o número digitado no input do HTML*/
    var n2 = document.querySelector(".n2").value; /*Armazeno na variável o número digitado no input do HTML*/
    var n3 = document.querySelector(".n3").value; /*Armazeno na variável o número digitado no input do HTML*/

    var media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3; /*Faço a média*/

    var arredondado = parseFloat(media.toFixed(2)); /*Arredondo o valor*/

    document.querySelector(".media").innerHTML = arredondado; /*Mando o valor arredondado para a classe do HTML*/
}