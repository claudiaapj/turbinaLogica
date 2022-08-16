let cont = 0
let num = 0

function pulaLinha() {

  document.write("<br>");	
  document.write("<br>");	
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}
mostra("Vamos descobrir os números pares de 1 até 100?")
  while(num < 100){
    num = num+2;
    cont++;
    
    mostra(cont + " - " + num);
  
  
  }



