let multiplica  = 0

function pulaLinha() {

  document.write("<br>");	
  document.write("<br>");	
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}
mostra("Quero ter acesso ao EmpregoOne")
for(multiplica = 0; multiplica <= 10; multiplica ++){
  mostra(8* multiplica)
}