function gestionarMedicos() {
    let medicos = document.getElementById("listaMedicos")
    medicos.innerHTML =  ""
    for (let i = 0; i < profesionales.length; i++) {
        medicos.innerHTML += `
            <tr>
                <td>${profesionales[i].nombre}</td>
                <td>${profesionales[i].especialidad}</td>
                <td>Activo</td>
                <td>
                    <button>Editar</button>
                    <button>Eliminar</button>

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

    for(let i = 0; i < profesionales.length; i++){

        if(profesionales[i].id > id){
            id = profesionales[i].id
        }

    }
    let idNuevo = id + 1 

    let medicoNuevoAgregado ={

        id : idNuevo,
        nombre,
        especialidad,
        atencion,
        experiencia,
        ubicacion :"Temuco,chile",
        sobreMi: "Medico nuevo Nutrivida",
        estudios : [titulos],
        areas : []
    }
    profesionales.push(medicoNuevoAgregado);
    localStorage.setItem(
        "profesionales",
        JSON.stringify(profesionales)
    );
    gestionarMedicos();

}


