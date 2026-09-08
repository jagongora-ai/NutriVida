document.addEventListener("DOMContentLoaded", function () {
    let parametros = new URLSearchParams(window.location.search);
    let id = Number(parametros.get("id"));

    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
    let pacienteSeleccionado = null;

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].id === id) {
            pacienteSeleccionado = pacientes[i];
            break; 
        }
    }

    if (!pacienteSeleccionado && pacientes.length > 0) {
        pacienteSeleccionado = pacientes[pacientes.length - 1];
    }

    if (!pacienteSeleccionado) {
        alert("No se encontró la ficha del paciente.");
        window.location.href = "ListaPacientes.html";
        return;
    }


    document.getElementById("nombre").textContent = pacienteSeleccionado.nombre || "No registrado";
    document.getElementById("rut").textContent = pacienteSeleccionado.rut || "No registrado";
    document.getElementById("edad").textContent = pacienteSeleccionado.edad ? pacienteSeleccionado.edad + " años" : "No registrado";
    document.getElementById("fechaNacimiento").textContent = pacienteSeleccionado.fechaNacimiento || "No registrado";
    document.getElementById("telefono").textContent = pacienteSeleccionado.telefono || "No registrado";
    document.getElementById("correo").textContent = pacienteSeleccionado.correo || "No registrado";

    document.getElementById("enfermedades").textContent = pacienteSeleccionado.enfermedades || "No registrado";
    document.getElementById("alergias").textContent = pacienteSeleccionado.alergias || "No registrado";
    document.getElementById("medicamentos").textContent = pacienteSeleccionado.medicamentos || "No registrado";

    document.getElementById("alimentacion").textContent = pacienteSeleccionado.alimentacion || "No registrado";
    document.getElementById("comidas").textContent = pacienteSeleccionado.comidas || "No registrado";
    document.getElementById("agua").textContent = pacienteSeleccionado.agua || "No registrado";
    document.getElementById("actividad").textContent = pacienteSeleccionado.actividad || "No registrado";

    document.getElementById("peso").textContent = pacienteSeleccionado.peso || "No registrado";
    document.getElementById("estatura").textContent = pacienteSeleccionado.estatura || "No registrado";
    document.getElementById("imc").textContent = pacienteSeleccionado.imc || "No registrado";
    document.getElementById("objetivo").textContent = pacienteSeleccionado.objetivo || "No registrado";

    document.getElementById("observaciones").textContent = pacienteSeleccionado.observaciones || "No registrado";
    document.getElementById("recomendaciones").textContent = pacienteSeleccionado.recomendaciones || "No registrado";
});