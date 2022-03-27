function botao(){ /*Quando o botão é pressionado chama está função*/
    a = 5; /*Armazeno 5 na variavél A*/
    b = 3; /*Armazeno 3 na variavél B*/

    var a = parseInt(a) + parseInt(b); /* Aqui faço A + B = 5 + 3, onde fica A = 8; */
    var b = parseInt(a) - parseInt(b); /* Aqui faço A - B = 8 - 3, onde fica B = 5; */
    
    var a = parseInt(a) - parseInt(b); /* Aqui faço A - B = 8 - 5, onde fica A = 3; */

    document.querySelector(".a").innerHTML = a; /*Mando o valor para a classe do HTML*/
    document.querySelector(".b").innerHTML = b; /*Mando o valor para a classe do HTML*/
}