document.getElementById("send").addEventListener("click",function(){

    //Se valida si el campo mensaje esta vacio
    if (document.getElementById("message").value == ""){
        alert("El campo mensaje no debe estar vacio");
    }
})