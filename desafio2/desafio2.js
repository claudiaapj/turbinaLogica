let button = document.querySelector("#some");

function somar(){
  let liResposta = document.querySelector(".resultado");
  let valor1 = parseFloat(document.querySelector("#valor1").value);
  let valor2 = parseFloat(document.querySelector("#valor2").value);
  let resultado = valor1 + valor2;
  liResposta.innerText = valor1 + " + " + valor2 + " = " + resultado;
}