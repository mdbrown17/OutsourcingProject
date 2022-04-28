function change_page_home(){
    window.location.href = "homePage.html";
}

function change_page_customerLogin(){
    window.location.href = "customerLogin.html";
}

function change_page_managerLogin(){
    window.location.href = "managerLogin.html";
}

function change_page_createAccount(){
    window.location.href = "createAccount.html";
}

function change_page_loginNavigation(){
    window.location.href = "loginNavigation.html";
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "user" && password === "web_dev")
    {
        alert("You have successfully logged in.");
        location.reload();
    }
    else{
        loginErrorMsg.style.opacity = 1;
    }
})