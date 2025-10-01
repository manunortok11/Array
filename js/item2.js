lista=["Gervronilson", " Estrada A", " Linha B", 203, 18.5]

alert(lista)

/**exibir elementos percorrendo com laço de repetição e inserindo os dados no html */

for(var i=0; i<lista.lenght; i++){
    document.write("<h2>"+lista[i]+"</h2>")
  }

  /**adicionar elementos ao fim da lista */
  lista.push("845000-000")
  alert(lista)

  /**remover o ultimo elemento da lista */
  lista.pop()
  alert(lista)

  /**remover o primeiro elemento da lista */
  lista.shift()
  alert(lista)

  /**adicionar itemm como o primeiro elemento da lista */
  lista.unshift("Gervronésio")
  alert(lista)

  