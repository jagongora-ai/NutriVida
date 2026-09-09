
let profesionalesOriginales = [

    {
        id: 1,

        nombre: "Nut. Carolina Fuentes M.",
        especialidad: "Especialista en Nutrición y Pérdida de Peso",
        imagen: "../imagenes/Profesionales/medica 1.jpg",
        ubicacion: "Temuco, Chile",
        atencion: "Presencial y Online",
        experiencia: "Más de 10 años en nutrición clínica",
        sobreMi: "Médico enfocada en la creación de planes de alimentación equilibrados y personalizados para alcanzar y mantener un peso saludable de forma sostenible.",
        estudios: [
            "Título de Cirujano y Nutricionista: Universidad de La Frontera",
            "Magíster en Nutrición Clínica: Universidad de Chile",
            "Diplomado en Manejo Integral del Sobrepeso y Obesidad"
        ],

        areas: [
            "Pérdida de Peso",
            "Reeducación Alimentaria",
            "Evaluación Antropométrica"
        ]
    },

    {
        id: 2,
        nombre: "Nut. Felipe Araya R.",
        especialidad: "Especialista en Nutrición Clínica pediátrica y familiar",
        imagen: "../imagenes/Profesionales/medico 1.jpg",
        ubicacion: "Temuco, Chile",
        atencion: "Presencial y Online",
        experiencia: "Más de 8 años en nutrición clínica",
        sobreMi: "Especialista en nutrición clínica, orientado al control y manejo de enfermedades metabólicas mediante alimentación adecuada.",
        estudios: [
            "Título de Médico Cirujano: Universidad de La Frontera",
            "Especialización en Nutrición Clínica",
            "Diplomado en Manejo de Enfermedades Metabólicas"
        ],

        areas: [
            "Nutrición Clínica",
            "Diabetes",
            "Enfermedades Metabólicas"
        ]
    },

    {
        id: 3,
        nombre: "Nut. Daniela Morales C.",
        especialidad: "Especialista en Nutrición Vegetariana y Vegana",
        imagen: "../imagenes/Profesionales/medica 2.jpg",
        ubicacion: "Temuco, Chile",
        atencion: "Presencial y Online",
        experiencia: "Más de 7 años en nutrición",
        sobreMi: "Especialista en nutrición vegetariana y vegana, enfocada en diseñar planes equilibrados adaptados a cada paciente.",
        estudios: [
            "Título de Nutricionista: Universidad de Chile",
            "Especialización en Nutrición Vegetariana",
            "Diplomado en Alimentación Vegana"
        ],

        areas: [
            "Nutrición Vegetariana",
            "Nutrición Vegana",
            "Alimentación Saludable"
        ]
    },

    {
        id: 4,
        nombre: "Nut. Rodrigo Sepúlveda A.",
        especialidad: "Especialista en Nutrición Deportiva",
        imagen: "../imagenes/Profesionales/medico 2.jpg",
        ubicacion: "Temuco, Chile",
        atencion: "Presencial y Online",
        experiencia: "Más de 9 años en nutrición deportiva",
        sobreMi: "Especialista en nutrición deportiva, enfocado en mejorar el rendimiento, la recuperación y la alimentación integral.",
        estudios: [
            "Título de Médico Cirujano: Universidad de La Frontera",
            "Especialización en Nutrición Deportiva",
            "Diplomado en Rendimiento Deportivo"
        ],

        areas: [
            "Nutrición Deportiva",
            "Rendimiento Físico",
            "Recuperación Deportiva"
        ]
    }

];


let profesionales;
if (localStorage.getItem("profesionales")) {
    profesionales = JSON.parse(localStorage.getItem("profesionales"));
} else {
    profesionales = profesionalesOriginales
}


let parametros = new URLSearchParams(window.location.search);

let id = Number(parametros.get("id"));


let profesionalSeleccionado;

for (let i = 0; i < profesionales.length; i++) {

    if (profesionales[i].id === id) {

        profesionalSeleccionado = profesionales[i];

    }

}




if (profesionalSeleccionado) {

    document.getElementById("imagen").src =
        profesionalSeleccionado.imagen;

    document.getElementById("nombre").textContent =
        profesionalSeleccionado.nombre;

    document.getElementById("especialidad").textContent =
        profesionalSeleccionado.especialidad;

    document.getElementById("ubicacion").textContent =
        profesionalSeleccionado.ubicacion;

    document.getElementById("atencion").textContent =
        profesionalSeleccionado.atencion;

    document.getElementById("experiencia").textContent =
        profesionalSeleccionado.experiencia;

    document.getElementById("sobreMi").textContent =
        profesionalSeleccionado.sobreMi;



    let listaEstudios =
        document.getElementById("estudios");

    for (let i = 0;
        i < profesionalSeleccionado.estudios.length;
        i++) {

        listaEstudios.innerHTML += `
            <li>
                ${profesionalSeleccionado.estudios[i]}
            </li>
        `;

    }


    let listaAreas =
        document.getElementById("areas");

    for (let i = 0;
        i < profesionalSeleccionado.areas.length;
        i++) {

        listaAreas.innerHTML += `
            <span class="badge bg-light text-dark border">
                ${profesionalSeleccionado.areas[i]}
            </span>
        `;

    }

}

