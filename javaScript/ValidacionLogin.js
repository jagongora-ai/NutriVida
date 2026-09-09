function validarInicioSesion() {

    let correo = document.getElementById("correo").value
    let clave = document.getElementById("password").value

    document.getElementById("error-correo").textContent = ""
    document.getElementById("error-password").textContent = ""
    document.getElementById("mensaje").textContent = ""

    if (correo == "") {
        document.getElementById("error-correo").textContent = "El correo no debe estar vacio"
        return false
    } else if (clave == "") {
        document.getElementById("error-password").textContent = "La contraseña no debe estar vacia"
        return false
    }

    let formatoCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!formatoCorreo.test(correo)) {
        document.getElementById("error-correo").textContent = "El formato de su correo ingresado " + correo + " es invalido"
        return false
    }

    if (correo.length > 100) {
        document.getElementById("error-correo").textContent = "El Correo electronico no puede tener mas de 100 caracteres"
        return false
    } else if (clave.length > 10) {
        document.getElementById("error-password").textContent = "Su contraseña no puede superar los 10 caracteres"
        return false
    }


    if (correo == "admin@nutrivida.com" && clave == "admin2026") {

        document.getElementById("mensaje").textContent = "Ingresando.."
        setTimeout(function () {
            window.location.href = "admin.html"
        }, 2000)

    } else if (correo == "paciente2026@gmail.com" && clave == "paciente67") {
        setTimeout(function () {
            document.getElementById("mensaje").textContent = "Ingresando"
            window.location.href = "index.html"
        }, 2000)

    } else if (correo == "medico2026@nutrivida.com" && clave == "medico2026") {
        setTimeout(function () {
            document.getElementById("mensaje").textContent = "Ingresando"
            window.location.href = ""
        }, 2000)
    } else {
        document.getElementById("mensaje").textContent = "Datos incorrecto, vuelva intentarlo"
        return false
    }
}