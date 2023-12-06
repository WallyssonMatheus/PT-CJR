async function signin(event) {
    event.preventDefault();

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    const response = await fetch("http://localhost:3000/api/users/login",{
        method: 'POST',
        body: JSON.stringify({ login, senha }),
        headers : {"Content-Type": "application/json"}
    });

    const data = await response.json();

    if ('error' in data) {
        const error_message = document.getElementById("error-hidden");

        error_message.style.display = "flex";
        error_message.innerHTML = data.error;
    };
};

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", signin);

// Ass.: Daniel Filipe
