function auth(){
    const isAuth = sessionStorage.getItem("isAuth");
    console.log(isAuth);
    if (!isAuth) window.location.href = "http://localhost:3000/";
}

auth();