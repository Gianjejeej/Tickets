// En el archivo script.js de la segunda página web

document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const sector = urlParams.get('sector');
  const fecha = urlParams.get('fecha');
  const nombreCompleto = urlParams.get('nombreCompleto');
  const email = urlParams.get('email');
  const telefono = urlParams.get('telefono');
  const solicitud = urlParams.get('solicitud');
  const estado = urlParams.get('estado');
  const nivelUrgencia = urlParams.get('nivelUrgencia');

  document.getElementById('ticket-id').innerText = id;
  document.getElementById('ticket-sector').innerText = sector;
  document.getElementById('ticket-fecha').innerText = fecha;
  document.getElementById('nombre_completo').innerText = nombreCompleto;
  document.getElementById('e-mail').innerText = email;
  document.getElementById('telefono').innerText = telefono;
  document.getElementById('solicitud').innerText = solicitud;
  document.getElementById('estado').innerText = estado;
  document.getElementById('nivel_urgencia').innerText = nivelUrgencia;
});







// Supongamos que tienes una lista de personal disponible en forma de array de objetos
const personal = [
  { id: 1, nombre: 'Juan Pérez' },
  { id: 2, nombre: 'María García' },
  { id: 3, nombre: 'Pedro Rodríguez' },
  // Otros empleados...
];

// Función para poblar el desplegable de personal
function populateAssignedPersonDropdown() {
  const assignedPersonDropdown = document.getElementById('assigned-person');

  // Limpiar cualquier opción previamente agregada
  assignedPersonDropdown.innerHTML = '';

  // Iterar sobre la lista de personal y agregar opciones al desplegable
  personal.forEach(empleado => {
    const option = document.createElement('option');
    option.value = empleado.id;
    option.textContent = empleado.nombre;
    assignedPersonDropdown.appendChild(option);
  });
}

// Llama a la función para poblar el desplegable cuando la página se cargue
populateAssignedPersonDropdown();





document.addEventListener("DOMContentLoaded", function() {
  // Obtén una referencia al botón "Asignar"
  const assignButton = document.getElementById('assign-button');

  // Agrega un evento click al botón "Asignar"
  assignButton.addEventListener('click', function() {
    // Muestra un mensaje de asignación realizada
    alert('Asignación realizada');

    // Redirige a la página 1
    window.location.href = 'index.html';
  });
});














