//simulador de turnos medicos
alert("Bienvenido a la central de turnos");
class PersonaTurno{
    
  constructor (nombre, apellido, dni){
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;
  }
  
  turno(elegirDia, elegirHorario){
      console.log(this.nombre + " " + this.apellido, "\n Dni: " + this.dni + "\n Su día y horario elegido es: " + elegirDia + " " + elegirHorario)
}
}

//ARAYS
const especialidades=["cardiologia", "Oftalmologia", "dermatologia",]

//en las siguientes variables se van a almacenar los turnos que se generen por el usuario 
let cardiologia = [];

let oftalmologia = [];

let dermatologia = [];
// diasTurnos se usa para acceder al dia del turno que desee el usuario 

const diasTurnos =["lunes", "martes", "miercoles","jueves", "viernes"];

// horariosTurnos se usa para acceder a la hora del turno que desee el usuario 
const horariosTurnos = ["11:45","12:45", "13:45", "14:45","15:45", "16:45"];

let especialidad = prompt("Ingresar para que especialidad desea el turno" + "\n" + especialidades.join("\n") + "\n ESC -Para finalizar").toLowerCase()

while(especialidad != "esc" ){
    console.log("entra al ciclo")
    switch (especialidad) {
        case "cardiologia":
            alert("Secretaria de cardiologia")
            //ingresa el turno que desea elegir
            do {
              elegirDia = prompt("Dias disponibles(ingrese tal cual esta para continuar): " + "\n" + diasTurnos.join("\n")).toLowerCase()
              elegirHorario = prompt("Horarios disponibles(ingrese tal cual esta para continuar):" + "\n" + horariosTurnos.join("\n"))
              
            } while (!(diasTurnos.includes(elegirDia) && horariosTurnos.includes(elegirHorario))){//verifica si el dia o el horario son los disponibles, si el usuario ingresa bien los datos entra al ciclo
              console.log("entra al while")
                do {
                  nombre = prompt("Ingrese su nombre: ");
                  apellido = prompt("Ingrese su apellido: ");
                  dni = prompt("Ingrese su DNI (sin puntos ni espacios): ");
                  
                  // Convierte el valor ingresado a un número
                  dni = parseInt(dni);
                  if (nombre === "" || apellido === "" || isNaN(dni)) {
                    console.log("Vuelva a ingresar los datos correctamente");
                }
                  
              } while (nombre === "" || apellido === "" || isNaN(dni)){//verifica que los datos NOMBRE,APELLIDO no esten vacios Y DNI sean numeros  
                const nuevoPaciente = new PersonaTurno(nombre, apellido, dni)
                nuevoPaciente.turno(elegirDia, elegirHorario);
                cardiologia.push(nuevoPaciente)
                console.log(cardiologia);
              }
            };
            break;
        case "oftalmologia":
          alert("Secretaria de Oftalmologia");
          do {
            elegirDia = prompt("Dias disponibles(ingrese tal cual esta para continuar): " + "\n" + diasTurnos.join("\n")).toLowerCase()
            elegirHorario = prompt("Horarios disponibles(ingrese tal cual esta para continuar):" + "\n" + horariosTurnos.join("\n"))
            
          } while (!(diasTurnos.includes(elegirDia) && horariosTurnos.includes(elegirHorario))){//verifica si el dia o el horario son los disponibles, si el usuario ingresa bien los datos entra al ciclo
            console.log("entra al while")
              do {
                nombre = prompt("Ingrese su nombre: ");
                apellido = prompt("Ingrese su apellido: ");
                dni = prompt("Ingrese su DNI (sin puntos ni espacios): ");
                
                // Convierte el valor ingresado a un número
                dni = parseInt(dni);
                if (nombre === "" || apellido === "" || isNaN(dni)) {
                  console.log("Vuelva a ingresar los datos correctamente");
              }
                
            } while (nombre === "" || apellido === "" || isNaN(dni)){
              const nuevoPaciente = new PersonaTurno(nombre, apellido, dni)
              nuevoPaciente.turno(elegirDia, elegirHorario);
              oftalmologia.push(nuevoPaciente)
              console.log(oftalmologia);
            }
          };
            break;
        case "dermatologia":
                alert("Secretaria de dermatologia")
                do {
                  elegirDia = prompt("Dias disponibles(ingrese tal cual esta para continuar): " + "\n" + diasTurnos.join("\n")).toLowerCase()
                  elegirHorario = prompt("Horarios disponibles(ingrese tal cual esta para continuar):" + "\n" + horariosTurnos.join("\n"))
                  
                } while (!(diasTurnos.includes(elegirDia) && horariosTurnos.includes(elegirHorario))){//verifica si el dia o el horario son los disponibles, si el usuario ingresa bien los datos entra al ciclo
                  console.log("entra al while")
                    do {
                      nombre = prompt("Ingrese su nombre: ");
                      apellido = prompt("Ingrese su apellido: ");
                      dni = prompt("Ingrese su DNI (sin puntos ni espacios): ");
                      
                      // Convierte el valor ingresado a un número
                      dni = parseInt(dni);
                      if (nombre === "" || apellido === "" || isNaN(dni)) {
                        console.log("Vuelva a ingresar los datos correctamente");
                    }
                      
                  } while (nombre === "" || apellido === "" || isNaN(dni)){
                    const nuevoPaciente = new PersonaTurno(nombre, apellido, dni)
                    nuevoPaciente.turno(elegirDia, elegirHorario);
                    dermatologia.push(nuevoPaciente)
                    console.log(dermatologia);
                  }
                };
                
        default:
            alert("Opción incorrecta, vuelva a intentar")
            break;
    }
    especialidad = prompt("Ingresar para que especialidad desea el turno" + "\n" + especialidades.join("\n") + "\n ESC -Para finalizar").toLowerCase()
}

alert("Hasta luego, que tenga buenas tadres.");