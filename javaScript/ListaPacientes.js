// Obtener los pacientes guardados
let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];


// Obtener el contenedor
let listaPacientes = document.getElementById("listaPacientes");


// Verificar si existen pacientes
if (pacientes.length === 0) {

    listaPacientes.innerHTML = `
        <div class="alert alert-info text-center">
            No hay pacientes registrados.
        </div>
    `;

} else {


    // Recorrer todos los pacientes
    for (let i = 0; i < pacientes.length; i++) {

        let paciente = pacientes[i];


        // Crear tarjeta
        listaPacientes.innerHTML += `

            <div class="card shadow-sm border-0 mb-3">

                <div class="card-body">

                    <div class="row align-items-center">

                        <div class="col-md-8">

                            <h4 class="fw-bold">
                                ${paciente.nombre}
                            </h4>

                            <p class="mb-1">
                                <strong>RUT:</strong>
                                ${paciente.rut}
                            </p>

                            <p class="mb-1">
                                <strong>Edad:</strong>
                                ${paciente.edad} años
                            </p>

                            <p class="mb-0">
                                <strong>Tipo de alimentación:</strong>
                                ${paciente.alimentacion}
                            </p>

                        </div>


                        <div class="col-md-4 mt-3 mt-md-0">

                            <div class="d-grid gap-2">

                                <a href="FichaPacienteVer.html?id=${paciente.id}"
                                    class="btn btn-primary">

                                    Ver ficha

                                </a>


                                <button
                                    class="btn btn-outline-danger"
                                    onclick="eliminarPaciente(${paciente.id})">

                                    Eliminar

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        `;

    }

}


// =====================================
// ELIMINAR PACIENTE
// =====================================

function eliminarPaciente(id) {

    let confirmar = confirm(
        "¿Está seguro de que desea eliminar este paciente?"
    );


    if (confirmar) {

        // Crear un nuevo arreglo sin el paciente seleccionado
        pacientes = pacientes.filter(function (paciente) {

            return paciente.id !== id;

        });


        // Guardar nuevamente
        localStorage.setItem(
            "pacientes",
            JSON.stringify(pacientes)
        );


        // Recargar la página
        location.reload();

    }

}