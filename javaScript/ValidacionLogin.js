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
        return false
    }

    if (correo.length > 100) {
        alert("El correo electronico no puede tener mas de 100 carteres")
        return false
    } else if (clave.length > 10) {
        alert("la contraseña debe tener como minimo 4 caracteres y un maximo de 10")
        return false
    }


    // validacion roles cliente/administrador
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
        alert("Datos erroneos, vuelva intentarlo")
        return false
    }
}