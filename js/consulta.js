$(document).ready(function(){

$("#send").click(function(){
    //Se valida si el campo nombre esta vacio
    if ($("#firstName").val() == ""){
        alert("El campo Nombre no debe estar vacio");
        return;
    }
    //Se valida si el campo apellido esta vacio
    if ($("#lastname").val() == ""){
        alert("El campo Apellido no debe estar vacio");
        return;
    }
    //Se valida si el campo mail esta vacio
    if ($("#mail").val() == ""){
        alert("El campo Email no debe estar vacio");
        return;
    }else{
        //Se valida si el mail tiene formato correcto
        let mail = $("#mail").val();
        if (validarEmail(mail) == false){
            alert("El mail ingresado es erroneo");
            return;
        }
    }
    //Se valida si el campo mensaje esta vacio
    if ($("#message").val() == ""){
        alert("El campo Mensaje no debe estar vacio");        
  
    }
})

$("#calculate").click(function(){

    let quote = parseInt($("#quote").val());
    
    if (quote >= 150){
        let countFamily = Math.round(quote / 150)
        $('#resultado').html('Estaria ayudando a '+ countFamily +' familias');
    }else{
        alert("Debe ingresar un monto mayor a $150")
        $('#resultado').html("");
    }
    
})

function validarEmail(valor) {
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return emailRegex.test(valor);
}

$("#pais").change(() => {
    let pais = String($('#pais').val());
    let file = './provincias_'+ pais.toLowerCase() +'.json';  
      $.ajax({
      type: 'GET',
      url: String(file)
    })
    .done(function(listas_prov){        
        var tags = $.parseJSON(listas_prov);  
        let objSelect = ''; 
        for (let i = 0;i < tags.cantidad;i++){
            objSelect += `<option>`+ tags.provincias[i].nombre +`</option>`;
        }    
        $('#provincia').removeAttr('disabled');
        $('#provincia').html(objSelect);
    })
    .fail(function(){
      alert('Hubo un errror al cargar las provincias')
    })
  })

  });