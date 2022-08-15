let button = document.querySelector("button");
function pulaLinha() {

  document.write("<br>");	
  document.write("<br>");	
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}
mostra("Quero ter acesso ao EmpregoOne");


for(multiplica = 1; multiplica <= 10; multiplica ++){
  mostra(8 * multiplica);
}

function resultado(){  
  for(multiplica = 1; multiplica <= 10; multiplica ++){
    let tabuada = parseFloat(document.querySelector("#numero").value);
    for(multiplica = 1; multiplica <= 10; multiplica ++){
      let resultado = tabuada *multiplica;
      mostra(tabuada * multiplica);    
    }
  }
}
