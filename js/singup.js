const registroForm = document.querySelector("#registroForm")

registroForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    //aca llamo a los input
    const nombre = document.querySelector("#nombre").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    //aca chequeo si el mail que se ingresa ya esta en el LOCALSTORAGE, SI esta NO se guarda y si NO existe se crea un usuario 
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    const usuarioRegistrado = usuarios.find(usuario => usuario.email === email);
    
    //valido si ya esta registrado(probar usuarioRegistrado ? return alert("usuario ya registrado"))
    if(usuarioRegistrado){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Usuario ya registrado",
        });
    }else{
        //sino esta registrado lo guardo en la base de datos USUARIOS
        Swal.fire({
            icon: "success",
            title: "Registro exitoso",
        });
        setTimeout(() => {
            
            usuarios.push({
                nombre: nombre,
                email: email,
                password: password,
            })
            //guardo en Storage
            localStorage.setItem("usuarios",JSON.stringify(usuarios))
            //redireccion a login
            window.location.href = "login.html"
        }, 2000);

    }
})