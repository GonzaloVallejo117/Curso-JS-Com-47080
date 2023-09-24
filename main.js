//simulador de turnos medicos
alert("Bienvenido a la central de turnos");
let nombre = prompt("Ingresar nombre");
let apellido = prompt("Ingresar apellido");
let dni = prompt("ingresar DNI");
//preguntar especialidad para el turno 

function imprimirTurno(nombre, apellido, dni, turnos) {
    nombre = nombre
    apellido = apellido
    dni = dni
    turnos = turnos
    console.log(nombre + " " + apellido, "\n Dni: " + dni, "\n Su turno asignado es: " + turnos)
}
function turnos(turnos){
            if(turnos == 1) {
                turnos = "11:45"
                imprimirTurno(nombre, apellido, dni, turnos);
            }else if(turnos == 2){
                turnos = "12:45"
                imprimirTurno(nombre, apellido, dni, turnos);
            }else if(turnos == 3){
                turnos = "13:45"
                imprimirTurno(nombre, apellido, dni, turnos);
            }else{
                alert("Numero ingresado incorrecto")
            }

}

let especialidad = Number(prompt("Ingresar para que especialidad desea el turno. (seleccione el numero correpondiente) \n 1- Cardiologia \n 2- Oftalmologia \n 3- Dermatologia \n 4-Finalizar"));

while(especialidad != 4 ){
    console.log("entra al ciclo")
    switch (especialidad) {
        case 1:
            alert("Secretaria de cardiologia")
            //ingresa el turno que desea elegir
            turnos = Number(prompt("Turnos disponibles:(Ingrese el numero correspondiente a cada uno) \n 1- 11:45 \n 2- 12:45 \n 3- 13:45"))
            if(turnos == 1) {
                turnos = "11:45"
                imprimirTurno(nombre, apellido, dni, turnos);
            }else if(turnos == 2){
                turnos = "12:45"
                imprimirTurno(nombre, apellido, dni, turnos);
            }else if(turnos == 3){
                turnos = "13:45"
                imprimirTurno(nombre, apellido, dni, turnos);
            }else{
                alert("Numero ingresado incorrecto")
            }
            break;
        case 2:
            alert("Secretaria de oftalmologia")
            //ingresa el turno que desea elegir
            turnos = Number(prompt("Turnos disponibles:(Ingrese el numero correspondiente a cada uno) \n 1- 11:45 \n 2- 12:45 \n 3- 13:45"))
            if(turnos == 1) {
                turnos = "11:45"
                imprimirTurno(nombre, apellido, dni, turnos);
            }else if(turnos == 2){
                turnos = "12:45"
                imprimirTurno(nombre, apellido, dni, turnos);
            }else if(turnos == 3){
                turnos = "13:45"
                imprimirTurno(nombre, apellido, dni, turnos);
            }else{
                alert("Numero ingresado incorrecto")
            }
            break;
        case 3:
                alert("Secretaria de dermatologia")
                //ingresa el turno que desea elegir
                turnos = Number(prompt("Turnos disponibles:(Ingrese el numero correspondiente a cada uno) \n 1- 11:45 \n 2- 12:45 \n 3- 13:45"))
                if(turnos == 1) {
                    turnos = "11:45"
                    imprimirTurno(nombre, apellido, dni, turnos);
                }else if(turnos == 2){
                    turnos = "12:45"
                    imprimirTurno(nombre, apellido, dni, turnos);
                }else if(turnos == 3){
                    turnos = "13:45"
                    imprimirTurno(nombre, apellido, dni, turnos);
                }else{
                    alert("Numero ingresado incorrecto")
                }
                break;
        default:
            alert("Opción incorrecta, vuelva a intentar")
            break;
    }
    especialidad = Number(prompt("Ingresar para que especialidad desea el turno. (seleccione el numero correpondiente) \n 1- Cardiologia \n 2- Oftalmologia \n 3- Dermatologia \n 4-Finalizar"));
}

alert("Hasta luego, que tenga buenas tadres.");