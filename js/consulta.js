document.getElementById("send").addEventListener("click",function(){

    //Se valida si el campo mensaje esta vacio
    if (document.getElementById("message").value == ""){
        alert("El campo mensaje no debe estar vacio");
    }
})

document.getElementById("calculate").addEventListener("click",function(){
    let quote = parseInt(document.getElementById("quote").value)
    
    if (quote >= 150){
        let countFamily = Math.round(quote / 150)
        document.getElementById('resultado').innerHTML='Estaria ayudando a '+ countFamily +' familias'
    }else{
        alert("Debe ingresar un monto mayor a $150")
        document.getElementById('resultado').innerHTML = ""
    }
    
})