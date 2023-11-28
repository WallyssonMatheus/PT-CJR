async function signup(event){
    event.preventDefault();
    const data = new FormData();

    // Getting the data
    const perfil = document.getElementById("perfil").files[0];
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const nome = document.getElementById("nome").value;
    const genero = document.getElementById("genero").value;
    const cargo = document.getElementById("cargo").value;
    
    console.log(perfil,email,senha,nome,genero,cargo);

    data.append("name",nome);
    data.append("email",email);
    data.append("password",senha);
    data.append("gender",genero);
    data.append("job_title",cargo);
    if (perfil) data.append("profile_picture", new Blob([perfil], {'type': perfil.type}),perfil.name);

    const response = await fetch("http://localhost:3000/api/users/register",{
        method: 'POST',
        body: data
    });
    
    console.log(await response.json())
}

const form = document.getElementById("form");
form.addEventListener("submit", signup);