function gestionarMedicos() {
    let medicos = document.getElementById("listaMedicos")
    medicos.innerHTML = ""
    for (let i = 0; i < profesionales.length; i++) {
        medicos.innerHTML += `
            <tr>
                <td>${profesionales[i].nombre}</td>
                <td>${profesionales[i].especialidad}</td>
                <td>${profesionales[i].experiencia}</td>
                <td>Activo</td>
                <td>
                    <button onclick = "editar(${profesionales[i].id})">Editar</button>
                    <button onclick = "eliminarMedico(${profesionales[i].id})">Eliminar</button>

                </td>
            </tr>
        `
    }

}
gestionarMedicos()

function agregarMedico() {

    let nombre = document.getElementById("nombreMedico").value
    let especialidad = document.getElementById("especialidad").value
    let atencion = document.getElementById("tipoAtencion").value
    let experiencia = document.getElementById("experienciaLaboral").value
    let titulos = document.getElementById("estudios").value

    let id = 0

    for (let i = 0; i < profesionales.length; i++) {

        if (profesionales[i].id > id) {
            id = profesionales[i].id
        }

    }
    let idNuevo = id + 1

    let medicoNuevoAgregado = {

        id: idNuevo,
        nombre,
        especialidad,
        atencion,
        experiencia,
        ubicacion: "Temuco,chile",
        sobreMi: "Medico nuevo Nutrivida",
        estudios: [titulos],
        areas: []
    }
    profesionales.push(medicoNuevoAgregado);
    localStorage.setItem(
        "profesionales",
        JSON.stringify(profesionales)
    );
    gestionarMedicos();

}
function eliminarMedico(eliminarId) {
    let posicion
    for (let i = 0; i < profesionales.length; i++) {

        if (eliminarId == profesionales[i].id) {
            posicion = i
        }
    }
    profesionales.splice(posicion, 1)
    localStorage.setItem(
        "profesionales",
        JSON.stringify(profesionales)
    );
    gestionarMedicos();
}

let idEdicion;
function editar(id) {
    idEdicion = id
    let medicoEncotrado
    for (let i = 0; i < profesionales.length; i++) {
        if (id == profesionales[i].id) {
            medicoEncotrado = profesionales[i]
        }
    }
    document.getElementById("nombreMedico").value = medicoEncotrado.nombre
    document.getElementById("especialidad").value = medicoEncotrado.especialidad
    document.getElementById("tipoAtencion").value = medicoEncotrado.atencion
    document.getElementById("experienciaLaboral").value = medicoEncotrado.experiencia
    document.getElementById("estudios").value = medicoEncotrado.estudios
}


function guardarCambios() {

    let nombre = document.getElementById("nombreMedico").value
    let especialidad = document.getElementById("especialidad").value
    let atencion = document.getElementById("tipoAtencion").value
    let experiencia = document.getElementById("experienciaLaboral").value
    let titulos = document.getElementById("estudios").value
    let posicionn
    for (let i = 0; i < profesionales.length; i++) {

        if (idEdicion == profesionales[i].id) {
            posicionn = i
        }
    }
    profesionales[posicionn].nombre  = nombre
    profesionales[posicionn].especialidad = especialidad
    profesionales[posicionn].atencion = atencion
    profesionales[posicionn].experiencia = experiencia
    profesionales[posicionn].estudios = [titulos]

    localStorage.setItem(
        "profesionales",
        JSON.stringify(profesionales)
    );
    gestionarMedicos()
}

