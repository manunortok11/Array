  var a=[4,8,3,5,9] /*criando um vetor ja preenchido*/

  /*exibindo o array de inteiros*/
  alert(a)
  /**exibindo um unico elemento do array */
  alert(a[4])
  /**alterar um valor */
  a[0]=7
  alert(a)
  /**Percorrendo o vetor usando laço        a.length é o comprimento do vetor*/
  for(var i=0; i<a.length; i++){
    document.write("<h2>"+a[i]+"</h2>")
  }