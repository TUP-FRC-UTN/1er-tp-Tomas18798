 
var txtNombre = document.getElementById("inputNombre");
var txtAsunto = document.getElementById("inputAsunto");
var txtCorreo = document.getElementById("inputCorreo");
var txtMensaje = document.getElementById("inputMensaje");
var txtCheck = document.getElementById("inputCheck");

function verificar(){
    /* Nombre */
    if(txtNombre.value === ''){
        alert('El campo Nombre es requerido');
        return false;
    }else{
        let exp = /^[a-zA-Z\s]{2,100}$/;
        //let exp =  /^[a-zA-Z0-9]{5,100}$/ ;
        if(exp.test(txtNombre.value) == false){
            alert("Verifique el formato del nombre, no puede contener numeros")
            return false;
        }
    }
    /* Asunto */
    if(txtAsunto.value === ''){
            alert('El campo Asunto es requerido');
            return false;
    }else{
        let exp = /^[a-zA-Z0-9\s]{5,100}$/ ;
        if(exp.test(txtAsunto.value) == false){
            alert("Verifique el formato del asunto, debe tener mas de 5 caracteres")
            return false;
        }
    }
    /* Correo */
    if(txtCorreo.value === ''){
        alert("El campo correo es requerido")
        return false;
    }else{
        let exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i ;
        if(exp.test(txtCorreo.value) == false){
            alert("Verifique el formato del correo electronico (nombre@direccion.xxx)")
            return false;
        }
    }
    /* Mensaje */
    if(txtMensaje.value === ''){
        alert("El campo mensaje es requerido")
        return false;
    }else{
        let exp = /^[a-zA-Z0-9\s]{10,150}$/ ;
        if(exp.test(txtMensaje.value) == false){
            alert("Verifique el formato ensaje")
            return false;
        }
    }
    /* Check */
    if(txtCheck.checked == false){
            alert('debe aceptar los terminos');
            return false;
        }
    return true;



}

function validar(){
    if(verificar() == true){
        alert("Datos enviados correctamente")
    }/* else{
        alert("Error de validacion")
    } */
}
/* Contador de caracteres */
function countChars(obj){
    var maxLength = 150;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("contadorC").innerHTML = '<span style="color: red;">Excediste el maximo de '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("contadorC").innerHTML = charRemain+' caracteres disponibles';
    }
}
