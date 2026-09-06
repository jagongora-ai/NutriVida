let parametros = new URLSearchParams(window.location.search);

let id = Number(parametros.get("id"));

let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

let pacienteSeleccionado = null;

for (let i = 0; i < pacientes.length; i++) {

    if (pacientes[i].id === id) {

        pacienteSeleccionado = pacientes[i];

    }

}


if (pacienteSeleccionado === null) {

    alert("No se encontró el paciente.");

    window.location.href = "ListaPacientes.html";

} else {


    document.getElementById("nombre").textContent =pacienteSeleccionado.nombre;

    document.getElementById("rut").textContent =pacienteSeleccionado.rut;

    document.getElementById("edad").textContent =pacienteSeleccionado.edad + " años";

    document.getElementById("fechaNacimiento").textContent =pacienteSeleccionado.fechaNacimiento;

    document.getElementById("telefono").textContent =pacienteSeleccionado.telefono;

    document.getElementById("correo").textContent =pacienteSeleccionado.correo;



    document.getElementById("enfermedades").textContent = pacienteSeleccionado.enfermedades || "No registrado";

    document.getElementById("alergias").textContent = pacienteSeleccionado.alergias || "No registrado";

    document.getElementById("medicamentos").textContent =pacienteSeleccionado.medicamentos || "No registrado";



    document.getElementById("alimentacion").textContent =pacienteSeleccionado.alimentacion;

    document.getElementById("comidas").textContent = pacienteSeleccionado.comidas;

    document.getElementById("agua").textContent = pacienteSeleccionado.agua;

    document.getElementById("actividad").textContent = pacienteSeleccionado.actividad;



    document.getElementById("peso").textContent = pacienteSeleccionado.peso;

    document.getElementById("estatura").textContent =pacienteSeleccionado.estatura;

    document.getElementById("imc").textContent = pacienteSeleccionado.imc;

    document.getElementById("objetivo").textContent = pacienteSeleccionado.objetivo;



    document.getElementById("observaciones").textContent = pacienteSeleccionado.observaciones || "No registrado";

    document.getElementById("recomendaciones").textContent = pacienteSeleccionado.recomendaciones || "No registrado";

}