var cafe=[] 
var almoco=[]
var janta=[]
var c
var a
var j
 document.write("<h1>"+"Cardápio"+"</h1>")
document.write("<h2>"+"Café da Manhã"+"</h2>")
do{
    c=prompt("Digite o café da manhã:")
    cafe.push(c)
    if(c==""){
        (alert("Digite algum alimento"))
        cafe.pop()
    }

    
}while(c!=null)
    alert(cafe)
    document.write("<ul>")
    for(var i=0; i<cafe.length-1; i++){
        document.write("<li>"+cafe[i]+"</li>")
    }
    document.write("</ul>")



document.write("<h2>"+"Almoço"+"</h2>")
do{
    a=prompt("Digite o almoço:")
    almoco.push(a)
    if(a==""){
        (alert("Digite algum alimento"))
        almoco.pop()
    }
    
}while(a!=null)
    alert(almoco)
    document.write("<ul>")
    for(var i=0; i<almoco.length-1; i++){
        document.write("<li>"+almoco[i]+"</li>")
    }document.write("</ul>")


document.write("<h2>"+"Jantar"+"</h2>")

do{
    j=prompt("Digite a janta:")
    janta.push(j)
    if(j==""){
        (alert("Digite algum alimento"))
        janta.pop()
    }
   


}while(j!=null)
    alert(janta)
    document.write("<ul>")
    for(var i=0; i<janta.length-1; i++){
        document.write("<li>"+janta[i]+"</li>")
    }
 document.write("</ul>")