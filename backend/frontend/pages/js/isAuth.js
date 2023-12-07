function auth(){
    const isAuth = sessionStorage.getItem("isAuth");
    const url = window.location.href;
    if (isAuth == "true" && url !== "http://localhost:3000/feed_logado.html")  {
        window.location.href = "http://localhost:3000/feed_logado.html";
    }
}

auth();