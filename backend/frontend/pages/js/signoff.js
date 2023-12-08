function signoff(){
    const isAuth = sessionStorage.getItem("isAuth");
    if (isAuth) {
        sessionStorage.setItem("isAuth",false);
        window.location.href = "http://localhost:3000/";
    }
};