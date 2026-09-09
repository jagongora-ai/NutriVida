function gestionarMedicos() {
    let medicos = document.getElementById("listaMedicos")
    medicos.innerHTML = ""
    for (let i = 0; i < profesionales.length; i++) {
        medicos.innerHTML += `
            <tr>
                <td>${profesionales[i].nombre}</td>
                <td>${profesionales[i].especialidad}</td>
                <td>${profesionales[i].atencion}</td>
                <td>${profesionales[i].experiencia}</td>
                <td>Activo</td>
                <td>
                    <button onclick = "editar(${profesionales[i].id})">Editar</button>
                    <button class= "boton-eliminar"onclick = "eliminarMedico(${profesionales[i].id})">Eliminar</button>
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

    if (nombre == "" || nombre.length >= 50) {
        alert("No puede estar en blanco el nombre del medico y debe tener menos de 50 caracteres")
        return false
    }
    if (especialidad == "" || especialidad.length > 50) {
        alert("No puede estar en blanco la especialidad del nutricionista y debe tener menos de 50 caracteres")
        return false
    }
    if (atencion == "" || atencion.length >= 20) {
        alert("No puede estar en blanco el tipo de atencion del nutricionista y debe tener menos de 20 caracteres")
        return false
    }
    if (experiencia == "" || experiencia.length > 100) {
        alert("No puede estar en blanco la experiencia del nutricionista y debe tener menos de 100 caracteres")
        return false
    }
    if (titulos == "" || titulos.length > 200) {
        alert("No puede estar en blanco los titulos del nutricionista y debe tener menos de 200 caracteres")
        return false
    }

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
    profesionales[posicionn].nombre = nombre
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

