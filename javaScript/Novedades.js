const publicaciones = [
    {
        id: 1,
        titulo: "5 Mitos Comunes sobre la Alimentación Saludable",
        imagen: "../imagenes/novedad/novedad 1.jpg",
        resumen: "Descubre la verdad detrás de las dietas restrictivas y aprende a comer de forma equilibrada sin culpa.",
        contenidoCompleto: "Muchas veces creemos que comer saludable significa eliminar carbohidratos o comer solo ensaladas. En este artículo desmentimos los mitos más comunes: 1) Los carbohidratos no son tus enemigos nocturnos. 2) Comer grasas saludables (como palta y frutos secos) es vital para el sistema hormonal. 3) Saltarse comidas no acelera el metabolismo. Nuestro equipo en NutriVida te enseña a diseñar platos balanceados y sostenibles en el tiempo.",
    },
    {
        id: 2,
        titulo: "La Importancia de la Hidratación en la Digestión",
        imagen: "../imagenes/novedad/novedad 2.jpg",
        resumen: "El agua es clave para el transporte de nutrientes y el buen funcionamiento intestinal. Conoce cuánto consumir diariamente.",
        contenidoCompleto: "El agua interviene en casi todos los procesos metabólicos de nuestro organismo. Una hidratación adecuada ayuda a disolver los nutrientes para que sean absorbidos por el cuerpo, mejora el tránsito intestinal y evita la fatiga digestiva. En Temuco, durante los meses fríos, solemos olvidar beber agua; por eso recomendamos consumir infusiones herbales sin azúcar para mantener los niveles óptimos.",
    }
];

document.addEventListener("DOMContentLoaded", function () {

    if (document.getElementById("contenedorNovedades")) {
        renderizarNovedades();
    }

    if (document.getElementById("detalleNovedad")) {
        renderizarDetalle();
    }
});

function renderizarNovedades() {
    const contenedor = document.getElementById("contenedorNovedades");
    let html = "";

    publicaciones.forEach(pub => {
        html += `
            <div class="col-12 col-md-6 col-lg-5">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${pub.imagen}" class="card-img-top object-fit-cover" height="250" alt="${pub.titulo}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-center fw-bold">${pub.titulo}</h5>
                        <p class="card-text text-secondary small text-center flex-grow-1">${pub.resumen}</p>
                        <div class="mt-auto pt-3">
                            <a href="DetalleNovedad.html?id=${pub.id}" class="btn btn-primary w-100" role="button">
                                <strong>Leer más</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = html;
}

function renderizarDetalle() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get("id"));
    const publicacion = publicaciones.find(p => p.id === id);

    const contenedor = document.getElementById("detalleNovedad");

    if (!publicacion) {
        contenedor.innerHTML = `<div class="alert alert-warning text-center">Publicación no encontrada.</div>`;
        return;
    }

    contenedor.innerHTML = `
        <article class="card shadow-sm border-0 p-4">
            <img src="${publicacion.imagen}" class="card-img-top object-fit-cover rounded mb-4" height="300" alt="${publicacion.titulo}">
            <h2 class="fw-bold text-dark mb-3 text-center">${publicacion.titulo}</h2>
            <hr>
            <p class="card-text text-secondary lead" style="white-space: pre-line; line-height: 1.8;">
                ${publicacion.contenidoCompleto}
            </p>
            <div class="mt-4 text-center">
                <a href="Novedades.html" class="btn btn-outline-secondary btn-sm" role="button">Volver a Novedades</a>
            </div>
        </article>
    `;
}