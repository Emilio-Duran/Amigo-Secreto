// Lista para guardar los amigos
let amigos = [];

// Capturar elementos
const inputNombre = document.querySelector("input");
const btnAñadir = document.querySelector("button"); // Primer botón
const btnSorteo = document.querySelectorAll("button")[1]; // Segundo botón

// Crear lista de amigos debajo del input
const listaAmigos = document.createElement("ul");
listaAmigos.style.marginTop = "10px";
listaAmigos.style.listStyle = "none";
listaAmigos.style.padding = "0";
inputNombre.parentElement.insertAdjacentElement("afterend", listaAmigos);

// Crear contenedor para mostrar el resultado debajo del botón de sorteo
const resultado = document.createElement("p");
resultado.style.fontSize = "1.5rem";
resultado.style.fontWeight = "bold";
resultado.style.marginTop = "10px";
resultado.style.textAlign = "center";
btnSorteo.insertAdjacentElement("afterend", resultado);

// Función para actualizar la lista visual
function actualizarLista() {
    listaAmigos.innerHTML = ""; // Limpiar lista
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        li.style.padding = "5px";
        listaAmigos.appendChild(li);
    });
}

// Evento para añadir amigo
btnAñadir.addEventListener("click", function() {
    let nombre = inputNombre.value.trim();
    if (nombre) {
        amigos.push(nombre);
        inputNombre.value = "";
        actualizarLista();
    } else {
        alert("Por favor, escribe un nombre");
    }
});

// Evento para sortear amigo
btnSorteo.addEventListener("click", function() {
    if (amigos.length > 0) {
        let elegido = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.textContent = `🎉 El amigo secreto es: ${elegido}`;
    } else {
        resultado.textContent = "❌ No hay amigos en la lista";
    }
});