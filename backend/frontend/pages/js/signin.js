async function signin(event) {
    event.preventDefault();

    const login = document.getElementById("login").value;
    const password = document.getElementById("senha").value;

    const response = await fetch("http://localhost:3000/api/users/login",{
        method: 'POST',
        body: JSON.stringify({ login, password }),
        headers : {"Content-Type": "application/json"}
    });

    const data = await response.json();

    if (Object.keys(data).includes('error')) {
        const error_message = document.getElementById("error-hidden");

        error_message.style.display = "flex";
        error_message.innerHTML = data.error;
    } else{
        localStorage.setItem("token", data.token);
        sessionStorage.setItem("isAuth",true);

        window.location.href = "http://localhost:3000/feed_logado.html";
    }
};

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", signin);

// Ass.: Daniel Filipe
