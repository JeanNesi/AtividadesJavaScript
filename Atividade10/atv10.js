const nomes = ["Jean", "Carlos", "Kauã", "Jean", "Kauã"]; /*Crio a array com alguns nomes*/

const nomesUnicos = [... new Set(nomes)]; /*Crio uma nova array com os mesmos valores, só que sem valores repetidos(se tiver)*/
var duplicadas = nomesUnicos.length !== nomes.length; /*Comparo os tamanhos das arrays, se for diferente é porque há valores repetidos*/

function botao(){ /*Quando o botão é pressionado chama está função*/
document.querySelector(".duplicadas").innerHTML = duplicadas; /*Mando o valor 'true' ou 'false' para a classe do HTML*/
}