/*--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/
//Validacion de correo
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

// Valida el formulario de Contacto

function validarContacto(enviar){
    $("#mensajeExito").html("");
    var enviar = true;

    /* Veirificacion de campos no vacios */
    var name = $("#name").val();
    var fono = $("#fono").val();
    var email = $("#email").val();
    var mensaje = $("#mensaje").val();

    if (name == "") {
        //campoVacio = campoVacio+"Nombre<br>";
        $("#name-error").html("<span class='text-error'>* Favor indique su nombre</span>");
        enviar = false;

    }
    else{
        $("#name-error").html("");        
    }

    if (fono == "") {
        //campoVacio = campoVacio+"Telefono<br>";
        $("#fono-error").html("<span class='text-error'>* Favor indique su numero de contacto</span>");
        enviar = false;
    }
    else{
        $("#fono-error").html("");        
    }

    if (email == "") {
        //campoVacio = campoVacio+"Email<br>";
        $("#email-error").html("<span class='text-error'>* Favor indique su correo electrónico</span>");
        enviar = false;
    }
    else{
        $("#email-error").html("");   
            
    }

    if (mensaje == "") {
        //campoVacio = campoVacio+"Mensaje<br><br>";
        $("#mensaje-error").html("<span class='text-error'>* Favor indiquenos su mensaje</span>");
        enviar = false;
    }
    else{
        $("#mensaje-error").html("");
        
    }   

    //Validacion de formato de email
    if(isEmail(email) == false && email != ""){
        $("#email-error").html("<span class='text-error'>* Tu direccion de email no es válida, favor revisar y escribir correctamente</span>");
        enviar = false;
    }

    //Validacion numerica
    if($.isNumeric(fono) == false && fono != ""){
        $("#fono-error").html("<span class='text-error'>* Tu teléfono no es válido, favor ingresar solo números</span>");
        enviar = false;
    }
     
    return enviar;
}

$("#enviar").click(function() {
    if(validarContacto(enviar)){
    $.ajax({
        type: "POST",
        url:"models/contacto.php",
        data:$("#contactForm").serialize(),
        success: function(data){
            
            $("#mensajeExito").html(data);
            
        },
        error: function (data) {
            
            $('#mensajeErrorCampos').html("Ha ocurrido un error inesperado, favor inténtelo más tardes");
        }
    });
        $("#contactForm")[0].reset();
        return false;
    }
    
});

