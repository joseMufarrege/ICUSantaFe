document.getElementById("send").addEventListener("click",function(){

    //Se valida si el campo mensaje esta vacio
    if (document.getElementById("firstName").value == ""){
        alert("El campo Nombre no debe estar vacio");
        return;
    }

    if (document.getElementById("lastName").value == ""){
        alert("El campo Apellido no debe estar vacio");
        return;
    }

    if (document.getElementById("mail").value == ""){
        alert("El campo Email no debe estar vacio");
        return;
    }else{
        let mail = document.getElementById("mail").value;
        if (validarEmail(mail) == false){
            alert("El mail ingresado es erroneo");
            return;
        }
    }

    if (document.getElementById("message").value == ""){
        alert("El campo Mensaje no debe estar vacio");        
  
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

function validarEmail(valor) {
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return emailRegex.test(valor);
  }