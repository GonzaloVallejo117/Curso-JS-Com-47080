
const loginForm = document.querySelector("#loginForm")

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    //traigo la base de datos que guarde ene el Storage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    //busco en la base de datos si existe el mail y la contraseña que ingresa el usuairio
    const validacionUsuario = usuarios.find(usuario => usuario.email === email && usuario.password === password)
    // si ingreso alguno de los campos mal
    if(validacionUsuario){
        Swal.fire({
            icon: "success",
            title: "¡Login exitoso!",
            text: `¡Bienvenido, ${validacionUsuario.nombre}!`,
        });
        //guardo en el local storage y lo redirijo al index
        setTimeout(() => {
            localStorage.setItem("login_exitoso", JSON.stringify(validacionUsuario))
            window.location.href = "index.html" 
            
        }, 2000);
        
    }else{
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Usuario y/o contraseña incorrectos",
        });
        loginForm.reset()
    }
})