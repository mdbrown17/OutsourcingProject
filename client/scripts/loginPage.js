function change_page_home(){
    window.location.href = "homePage.html";
}

function change_page_customerLogin(){
    window.location.href = "customerLogin.html";
}

function change_page_managerLogin(){
    window.location.href = "managerLogin.html";
}

function change_page_loginNavigation(){
    window.location.href = "loginNavigation.html";
}

function change_page_createCustomerAccount(){
    window.location.href = "createCustomerAccount.html";
}

function change_page_createManagerAccount(){
    window.location.href = "createManagerAccount.html";
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "user" && oassword === "web_dev")
    {
        alert("You have successfully logged in.");
        location.reload();
    }
    else{
        loginErrorMsg.style.opacity = 1;
    }
})