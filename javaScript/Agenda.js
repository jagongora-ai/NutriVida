const listaCitas = [];

function agendarCita(event) {
    event.preventDefault();

    const especialidad = document.getElementById('especialidad').value;
    const prestacion = document.getElementById('prestacion').value;
    const doctor = document.getElementById('doctor').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    let precio = 0;

    if (especialidad === "Online (Video llamada)") {
        if (prestacion === "Consulta") {
            precio = 25000;
        } else if (prestacion === "Evaluación") {
            precio = 20000;
        } else if (prestacion === "Plan especializado") {
            precio = 35000;
        } else { 
            precio = 15000;
        }
    } else if (especialidad === "Presencial en grupo") {
        if (prestacion === "Taller Grupal") {
            precio = 18000;
        } else {
            precio = 22000;
        }
    } else { 
        
        if (prestacion === "Consulta") {
            precio = 35000;
        } else if (prestacion === "Evaluación") {
            precio = 30000;
        } else if (prestacion === "Plan especializado") {
            precio = 45000;
        } else {
            precio = 20000;
        }
    }

    const nuevaCita = {
        id: Date.now(),
        especialidad: especialidad,
        prestacion: prestacion,
        doctor: doctor,
        fecha: fecha,
        hora: hora,
        precio: precio
    };

    listaCitas.push(nuevaCita);
    console.log("Historial de citas actual:", listaCitas);

    const htmlResumen = `
        <p><strong>Modalidad:</strong> ${especialidad}</p>
        <p><strong>Tipo de consulta:</strong> ${prestacion}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Hora:</strong> ${hora}</p>
        <hr>
        <p><strong>Precio Total:</strong> $${precio.toLocaleString('es-CL')}</p>
    `;

    document.getElementById('resumen-cita').innerHTML = htmlResumen;

    const modalElemento = document.getElementById('modalResumen');
    const modalBootstrap = new bootstrap.Modal(modalElemento);
    modalBootstrap.show();
}