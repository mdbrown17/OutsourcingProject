function checkLogin()
{
    console.log("made it here");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("username", username);

    var temp = {
        username: username,
        password: password
    };

    console.log(temp.username);
    console.log(temp.password);

    fetch('https://localhost:5001/api/managers')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        json.forEach((manager) => {        

            if(manager.mUsername == temp.username && manager.mPassword == temp.password)
            {
                var id = manager.managerID;
                localStorage.setItem("managerID", id);
                change_page_managerNavigation();
            }
            else if(manager.mUsername != temp.username && manager.mPassword == temp.password)
            {
                let html = "";
                html += '<p><strong>There is no account with that username.</strong></p>';
                document.getElementById("error").innerHTML = html;
            }
            else if(manager.mUsername == temp.username && manager.mPassword != temp.password)
            {
                let html = "";
                html += '<p><strong>Incorrect password. Please try again.</strong></p>';
                document.getElementById("error").innerHTML = html;
            }
        })
    });
}

function change_page_managerNavigation(){
    window.location.href = "managerNavigation.html";
}