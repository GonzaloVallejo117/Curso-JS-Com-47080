//validacion de que no se pueda acceder al index sin estar logeado
const usuario = JSON.parse(localStorage.getItem("login_exitoso")) || false
if(!usuario){
  window.location.href = "login.html"
}

const cerrarSesion = document.querySelector("#cerrarSesion");
cerrarSesion.addEventListener("click", ()=>{
  alert("hasta pronto")
  //vaciar el storage login_exitoso
  localStorage.removeItem('login_exitoso');
  window.location.href = "login.html"
})




//simulador de turnos medicos


//codigo que usare para crear los turnos
/* class PersonaTurno{
    
  constructor (nombre, apellido, dni){
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;
  }
  
  turno(elegirDia, elegirHorario){
      console.log(this.nombre + " " + this.apellido, "\n Dni: " + this.dni + "\n Su día y horario elegido es: " + elegirDia + " " + elegirHorario)
}
} */

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
const registroForm = document.getElementById("registroForm");
const listaTurnos = document.getElementById("pacientesRegistrados");

// evento para manejar el envío del formulario
registroForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // obtengo los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const especialidad = document.getElementById("especialidad").value;
    const diaTurno = document.getElementById("diaTurno").value;
    const horaTurno = document.getElementById("horaTurno").value;

    // Construye el mensaje con los datos del turno
    const mensaje = `
        Nombre: ${nombre}<br>
        Apellido: ${apellido}<br>
        DNI: ${dni}<br>
        Especialidad: ${especialidad}<br>
        Día del Turno: ${diaTurno}<br>
        Hora del Turno: ${horaTurno}
    `;

    // Crea un nuevo elemento <li> para el turno y agrega el mensaje
    const nuevoTurno = document.createElement("li");
    nuevoTurno.innerHTML = mensaje;

    // Agrega el nuevo turno a la lista de turnos
    pacientesRegistrados.appendChild(nuevoTurno);

    // Limpia el formulario después de agregar el turno
    registroForm.reset();
});






