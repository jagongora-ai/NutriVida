function gestionarMedicos() {
    let medicos = document.getElementById("listaMedicos")

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



