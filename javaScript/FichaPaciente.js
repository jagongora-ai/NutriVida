let formulario = document.getElementById("formularioPaciente");


formulario.addEventListener("submit", function (evento) {


    evento.preventDefault();


    let nombre = document.getElementById("nombre").value.trim();
    let rut = document.getElementById("rut").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let telefono = document.getElementById("telefono").value.trim();
    let correo = document.getElementById("correo").value.trim();

    let enfermedades = document.getElementById("enfermedades").value.trim();
    let alergias = document.getElementById("alergias").value.trim();
    let medicamentos = document.getElementById("medicamentos").value.trim();

    let alimentacion = document.getElementById("alimentacion").value;
    let comidas = document.getElementById("comidas").value.trim();
    let agua = document.getElementById("agua").value.trim();
    let actividad = document.getElementById("actividad").value;

    let peso = document.getElementById("peso").value.trim();
    let estatura = document.getElementById("estatura").value.trim();

    let objetivo = document.getElementById("objetivo").value.trim();
    let observaciones = document.getElementById("observaciones").value.trim();
    let recomendaciones = document.getElementById("recomendaciones").value.trim();


    if (nombre === "") {
        alert("Debe ingresar el nombre del paciente.");
        return;
    } else if (!isNaN(nombre)) {
        alert("El nombre debe contener texto.");
        return;
    }


    let formatoRut = /^\d{7,8}-[\dkK]$/;

    if (rut === "") {
        alert("Debe ingresar el RUT.");
        return;
    } else if (!formatoRut.test(rut)) {
        alert("El RUT debe tener un formato válido. Ejemplo: 12345678-9");
        return;
    }


    if (edad === "") {
        alert("Debe ingresar la edad.");
        return;
    } else if (isNaN(edad)) {
        alert("La edad debe ser un número.");
        return;
    } else if (!Number.isInteger(Number(edad))) {
        alert("La edad debe ser un número entero.");
        return;
    } else if (Number(edad) <= 0 || Number(edad) > 120) {
        alert("Ingrese una edad válida.");
        return;
    }


    if (fechaNacimiento === "") {
        alert("Debe ingresar la fecha de nacimiento.");
        return;
    } else if (new Date(fechaNacimiento) > new Date()) {
        alert("La fecha de nacimiento no puede ser mayor a la fecha actual.");
        return;
    }


    if (telefono === "") {
        alert("Debe ingresar el teléfono.");
        return;
    } else if (isNaN(telefono)) {
        alert("El teléfono debe contener solamente números.");
        return;
    }


    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {
        alert("Debe ingresar el correo.");
        return;
    } else if (!formatoCorreo.test(correo)) {
        alert("Ingrese un correo electrónico válido.");
        return;
    }


    if (alimentacion === "") {
        alert("Debe seleccionar el tipo de alimentación.");
        return;
    }


    if (comidas === "") {
        alert("Debe ingresar la cantidad de comidas al día.");
        return;
    } else if (isNaN(comidas)) {
        alert("Las comidas al día deben ser un número.");
        return;
    } else if (!Number.isInteger(Number(comidas))) {
        alert("Las comidas al día deben ser un número entero.");
        return;
    } else if (Number(comidas) <= 0 || Number(comidas) > 15) {
        alert("Ingrese una cantidad válida de comidas.");
        return;
    }


    if (agua === "") {
        alert("Debe ingresar la cantidad de vasos de agua.");
        return;
    } else if (isNaN(agua)) {
        alert("La cantidad de agua debe ser un número.");
        return;
    } else if (Number(agua) < 0 || Number(agua) > 30) {
        alert("Ingrese una cantidad válida de vasos de agua.");
        return;
    }


    if (actividad === "") {
        alert("Debe seleccionar el nivel de actividad física.");
        return;
    }


    if (peso === "") {
        alert("Debe ingresar el peso.");
        return;
    } else if (isNaN(peso)) {
        alert("El peso debe ser un número.");
        return;
    } else if (Number(peso) <= 0 || Number(peso) > 500) {
        alert("Ingrese un peso válido.");
        return;
    }


    if (estatura === "") {
        alert("Debe ingresar la estatura.");
        return;
    } else if (isNaN(estatura)) {
        alert("La estatura debe ser un número.");
        return;
    } else if (Number(estatura) <= 0 || Number(estatura) > 3) {
        alert("Ingrese una estatura válida.");
        return;
    }


    if (objetivo === "") {
        alert("Debe ingresar el objetivo nutricional.");
        return;
    }


    if (observaciones === "") {
        alert("Debe ingresar las observaciones del profesional.");
        return;
    }

    let pesoNumero = Number(peso);
    let estaturaNumero = Number(estatura);

    let imc = pesoNumero / (estaturaNumero * estaturaNumero);

    imc = imc.toFixed(2);



    document.getElementById("imc").value = imc;



    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

    let nuevoId = 1;

    if (pacientes.length > 0) {

        nuevoId = pacientes[pacientes.length - 1].id + 1;

    }



    let paciente = {

        id: nuevoId,

        nombre: nombre,
        rut: rut,
        edad: Number(edad),
        fechaNacimiento: fechaNacimiento,
        telefono: telefono,
        correo: correo,

        enfermedades: enfermedades,
        alergias: alergias,
        medicamentos: medicamentos,

        alimentacion: alimentacion,
        comidas: Number(comidas),
        agua: Number(agua),
        actividad: actividad,

        peso: pesoNumero,
        estatura: estaturaNumero,
        imc: Number(imc),

        objetivo: objetivo,
        observaciones: observaciones,
        recomendaciones: recomendaciones

    };



    pacientes.push(paciente);

    localStorage.setItem("pacientes", JSON.stringify(pacientes));



    alert("La ficha del paciente se guardó correctamente.");

});