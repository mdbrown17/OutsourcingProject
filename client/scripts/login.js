function checkLogin()
{
    console.log("made it here");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    var user = {
        cusername: username,
        cpassword: password
    };

    console.log(user.cusername);
    console.log(user.cpassword);

    var newCheck = new CheckCustLogin.CheckLogin(user, password);

    console.log(int);
    

}