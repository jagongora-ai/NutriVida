document.addEventListener("DOMContentLoaded", function () {
    renderizarPacientes();
});


function obtenerPacientes() {
    return JSON.parse(localStorage.getItem("pacientes")) || [];
}

function renderizarPacientes() {
    const pacientes = obtenerPacientes();
    const listaPacientes = document.getElementById("listaPacientes");

    if (!listaPacientes) return;

    if (pacientes.length === 0) {
        listaPacientes.innerHTML = `
            <div class="alert alert-info text-center p-4 shadow-sm rounded-3">
                <h5 class="alert-heading fw-bold mb-1">Sin registros</h5>
                <p class="mb-0">No hay pacientes registrados actualmente en el sistema.</p>
            </div>
        `;
        return;
    }

    let htmlContent = "";

    for (let i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i];

        htmlContent += `
            <div class="card shadow-sm border-0 mb-3 rounded-3">
                <div class="card-body p-4">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <h4 class="fw-bold text-primary mb-2">
                                ${paciente.nombre || "Sin Nombre"}
                            </h4>
                            <p class="mb-1 text-secondary">
                                <strong>RUT:</strong> ${paciente.rut || "No registrado"}
                            </p>
                            <p class="mb-1 text-secondary">
                                <strong>Edad:</strong> ${paciente.edad ? paciente.edad + " años" : "No registrada"}
                            </p>
                            <p class="mb-0 text-secondary">
                                <strong>Tipo de alimentación:</strong> ${paciente.alimentacion || "No registrada"}
                            </p>
                        </div>

                        <div class="col-md-4 mt-3 mt-md-0">
                            <div class="d-grid gap-2">
                                <a href="FichaPacienteVer.html?id=${paciente.id}" class="btn btn-primary">
                                    Ver ficha
                                </a>
                                <a href="FichaPacienteEditar.html?id=${paciente.id}" class="btn btn-outline-secondary">
                                    Editar
                                </a>
                                <button class="btn btn-outline-danger" onclick="eliminarPaciente(${paciente.id})">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    listaPacientes.innerHTML = htmlContent;
}




function eliminarPaciente(id) {
    let confirmar = confirm("¿Está seguro de que desea eliminar este paciente?");

    if (confirmar) {
        let pacientes = obtenerPacientes();


        pacientes = pacientes.filter(function (paciente) {
            return paciente.id !== id;
        });


        localStorage.setItem("pacientes", JSON.stringify(pacientes));

        renderizarPacientes();
    }
}