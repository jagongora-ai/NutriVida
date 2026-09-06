function agendarCita(event) {
    event.preventDefault();


    const especialidad = document.getElementById('especialidad').value;
    const prestacion = document.getElementById('prestacion').value;
    const doctor = document.getElementById('doctor').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    const htmlResumen = `
        <p><strong>Especialidad:</strong> ${especialidad}</p>
        <p><strong>Prestación:</strong> ${prestacion}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Hora:</strong> ${hora}</p>
    `;

    document.getElementById('resumen-cita').innerHTML = htmlResumen;

    const modalElemento = document.getElementById('modalResumen');
    const modalBootstrap = new bootstrap.Modal(modalElemento);
    modalBootstrap.show();
}