function validarInicioSesion() {

    let correo = document.getElementById("correo").value
    let clave = document.getElementById("password").value

    if (correo == "" || clave == "") {
        alert("Debe cumplir con los campos")
        return false
    }

    let formatoCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!formatoCorreo.test(correo)) {
        alert("Error en su correo " + correo + " es invalido, ingrese uno valido")
    }

    if (correo.length > 100) {
        alert("El correo electronico no puede tener mas de 100 carteres")
    } else if (clave.length > 10) {
        alert("la contraseña debe tener como minimo 4 caracteres y un maximo de 10")
    }

    // validacion roles cliente/administrador
    if (correo == "medico@nutrivida.com" && clave == "medico2026") {
        window.location.href = "admin.html"
    } else if (correo == "paciente2026@gmail.com" && clave == "paciente67") {
        window.location.href = "index.html" // lo llevara al inicio de pagina
    } else {
        alert("Datos erroneos, vuelva intentarlo")
    }
}