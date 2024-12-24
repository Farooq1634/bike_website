document.addEventListener("DOMContentLoaded", () => {
    let logincontainer = document.querySelector(".login-container");
    let loginbtn = document.querySelector(".login-btn");
    let closelogin = document.querySelector(".close-login");

    loginbtn.onclick = () => {
        logincontainer.classList.add("open-login");
        closelogin.onclick = () => {
            logincontainer.classList.remove("open-login");
        };
    };
});
