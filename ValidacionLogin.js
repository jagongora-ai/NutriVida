function validarInicioSesion(){

    let correo = document.getElementById("correo").value
    let clave = document.getElementById("password").value

    if(correo == "" || clave == ""){
        alert ("Debe cumplir con los campos")
        return false
    }

    let formatoCorreo =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!formatoCorreo.test(correo)){
        alert("Error en su correo " + correo + " es invalido")
    }

    // validacion roles cliente/administrador
    if(correo == "medico@nutrivida.com" && clave == "medico2026"){
        window.location.href = ""
    }else if( correo == "paciente2026@gmail.com" && clave == "1345paciente67"){
        window.location.href = ""
    }else{
        alert("Datos erreneos, vuelva intentarlo")
    }
}