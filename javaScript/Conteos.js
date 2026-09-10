let nutricion = document.getElementById("totalNutricionista")
nutricion.textContent = profesionales.length

// falta contar total de citas // y se termina el inicio admin
let agendas = document.getElementById("totalAgendas")
let lista = JSON.parse(localStorage.getItem("listaCitas")) || []
agendas.textContent = lista.length