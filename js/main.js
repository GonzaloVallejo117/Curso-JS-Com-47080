//validacion de que no se pueda acceder al index sin estar logeado
const usuario = JSON.parse(localStorage.getItem("login_exitoso")) || false;
if (!usuario) {
  window.location.href = "login.html";
}

const cerrarSesion = document.querySelector("#cerrarSesion");
cerrarSesion.addEventListener("click", () => {
  Swal.fire({
    title: "¿Desea cerrar la sesión?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Cerrar sesión",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Sesión finalizada",
        icon: "success",
      });
      localStorage.removeItem('login_exitoso');
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    }
  });
});

let turnosPrecargados = [];
let btnPrecargar = document.querySelector("#turnosPrecargados");

//FETCH
fetch("./js/turnos_precargados.json")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    turnosPrecargados = data;
    // evento para cargar los turnos precargados
  btnPrecargar.addEventListener("click", function () {
    Swal.fire({
      title: "Desea mostrar los Turnos Precargados?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Turnos cargados con éxito", "", "success");
        turnosGenerados = turnosGenerados.concat(turnosPrecargados);
        localStorage.setItem("turnosGenerados", JSON.stringify(turnosGenerados));
        mostrarTurnos();
      }
    });
  });
  });

// simulador de turnos medicos
class PersonaTurno {
  constructor(nombre, apellido, dni, especialidad, diaTurno, horaTurno) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.especialidad = especialidad;
    this.diaTurno = diaTurno;
    this.horaTurno = horaTurno;
  }
}

// función que crea el div con la info del turno
function imprimirTurno(PersonaTurno, indice) {
  let container = document.createElement("div");
  container.className = "turnoGenerado";
  container.innerHTML = `
    <p>Nombre: ${PersonaTurno.nombre}</p>
    <p>Apellido: ${PersonaTurno.apellido}</p>
    <p>Dni: ${PersonaTurno.dni}</p>
    <p>Especialidad: ${PersonaTurno.especialidad}</p>
    <p>Día: ${PersonaTurno.diaTurno}</p>
    <p>Hora: ${PersonaTurno.horaTurno}</p>
    <button class="eliminarTurno" data-indice="${indice}">Eliminar</button>
  `;

  // agrega un evento al boton de eliminar
  let btnEliminar = container.querySelector(".eliminarTurno");
  btnEliminar.addEventListener("click", function () {
    Swal.fire({
      title: "Desea eliminar el turno?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Turno eliminado", "", "success");
        eliminarTurno(indice);
      } else if (result.isDenied) {
        Swal.fire("El turno no ha sido eliminado", "", "info");
      }
    });
  });
  return container;
}

// llamado al form
const registroForm = document.getElementById("registroForm");
const listaTurnos = document.getElementById("pacientesRegistrados");
const contenedorTurnos = document.getElementById("contenedor_turnos");

// array donde se van a almacenar los turnos generados
let turnosGenerados = [];

// Recupera la información almacenada en el localStorage
if (localStorage.getItem("turnosGenerados")) {
  turnosGenerados = JSON.parse(localStorage.getItem("turnosGenerados"));
  // Muestra los turnos almacenados
  mostrarTurnos();
}

// evento para manejar el envío del formulario
registroForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario

  Swal.fire({
    icon: "success",
    title: "Turno generado con éxito",
  });

  // obtengo los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;
  const especialidad = document.getElementById("especialidad").value;
  const diaTurno = document.getElementById("diaTurno").value;
  const horaTurno = document.getElementById("horaTurno").value;

  // Construye el mensaje con los datos del turno
  let nuevoTurno = new PersonaTurno(
    nombre,
    apellido,
    dni,
    especialidad,
    diaTurno,
    horaTurno
  );

  turnosGenerados.push(nuevoTurno);
  // Almacena la información en el localStorage
  localStorage.setItem("turnosGenerados", JSON.stringify(turnosGenerados));

  mostrarTurnos();

  registroForm.reset();
});

// función para mostrar los turnos
function mostrarTurnos() {
  // limpia el contenedor antes de mostrar los turnos
  contenedorTurnos.innerHTML = "";
  // muestra los turnos almacenados
  turnosGenerados.forEach((turno, indice) => {
    // crea un elemento div que va a ser el contenedor del turno
    let divTurno = imprimirTurno(turno, indice);
    contenedorTurnos.appendChild(divTurno);
  });
}

// función para eliminar un turno
function eliminarTurno(indice) {
  // Elimina el turno del array
  turnosGenerados.splice(indice, 1);

  // Actualiza el localStorage
  localStorage.setItem("turnosGenerados", JSON.stringify(turnosGenerados));

  // Muestra los turnos actualizados
  mostrarTurnos();
}
