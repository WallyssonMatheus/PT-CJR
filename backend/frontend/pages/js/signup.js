function getBase64(file) {
    // Turn File into Base64 string
    // Sávio Henrique
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

async function signup(event){
    // Sávio Henrique
    event.preventDefault();
    let default_profile;  

    // Get Default Profile Picture
    await fetch("http://localhost:3000/src/user_profile/default_profile.jpg")
        .then((response) => response.blob())
        .then((blobImg) => {
            default_profile = new File([blobImg],"default_profile.png",{type:'image/jpeg'});
        });

    // Getting the data
    const perfil = document.getElementById("perfil").files[0];
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const nome = document.getElementById("nome").value;
    const genero = document.getElementById("genero").value;
    const cargo = document.getElementById("cargo").value;
    const image = perfil ? await getBase64(perfil) : await getBase64(default_profile); // Pass image to Base64

    // Appending the data to the Json object
    const jsondata = (image === 0) ? {
        "name":nome,
        "email":email,
        "password":senha,
        "gender":genero,
        "job_title":cargo
    } : {
        "name":nome,
        "email":email,
        "password":senha,
        "gender":genero,
        "job_title":cargo,
        "profile_picture":image
    };

    // Fetching POST form to Backend API
    const response = await fetch("http://localhost:3000/api/users/register",{
        method: 'POST',
        body: JSON.stringify(jsondata),  
        headers : {"Content-Type": "application/json"}
    });

    // TODO - if status = 500, redo and show form error
    console.log(await response.json())
}

// TODO - Form validation on frontend

// Sávio Henrique
const form = document.getElementById("form");
form.addEventListener("submit", signup);
// Sávio Henrique