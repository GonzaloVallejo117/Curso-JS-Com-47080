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
    if(!validacionUsuario){
        alert("Usuario y/o contaseña incorrectos")
        loginForm.reset()
    }
    //muesto el nombre del usuario que ingreso
    alert(`Bienvenido ${validacionUsuario.nombre}`)
    localStorage.setItem("login_exitoso", JSON.stringify(validacionUsuario))
    window.location.href = "index.html" 
})