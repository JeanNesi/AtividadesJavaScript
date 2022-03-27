var numeros = []; /*Crio uma array vazia*/
var soma = 0; /*Crio a variável soma*/

const quantidade = prompt("De quantos números você deseja fazer a média?"); /*Abro uma caixa de diálogo para pegar a informação da quantidade de números*/

for(var i = 1; i <= quantidade; i++){ /*Abro um for que repetirá a pergunta de acordo com a quantiade de números que deseja fazer a média*/
    var numero = (parseFloat(prompt("Digite o " + i + "° número"))); /*Abro uma caixa de diálogo para pegar os números*/
    numeros.push(numero); /*Adiciono na array*/
}

for(var j = 0; j < numeros.length; j++) { /*Uso o for para pegar os números da array*/
    soma += numeros[j]; /*Somo todos os valores*/
}
var media = parseFloat(soma) /parseInt(quantidade); /*Faço a média*/

var arredondado = parseFloat(media.toFixed(2)); /*Arredondo o valor*/
alert("A média dos números digitados é: " + arredondado); /*Imprimo a média na tela usando um alert*/