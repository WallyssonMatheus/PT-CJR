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
    const blob = new Blob([perfil], {'type': perfil.type});
    
    console.log(blob)
    console.log(perfil,email,senha,nome,genero,cargo);

    data.append("name",nome);
    data.append("email",email);
    data.append("password",senha);
    data.append("gender",genero);
    data.append("job_title",cargo);
    data.append("profile_picture",perfil);

    console.log(data);

    const response = await fetch("http://localhost:3000/api/users/register",{
        method: 'POST',
        body: JSON.stringify(data)
    });
    
    console.log(response.body);
}

const form = document.getElementById("form");
form.addEventListener("submit", signup);