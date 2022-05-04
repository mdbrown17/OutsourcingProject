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

    fetch('https://localhost:5001/api/customers')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        json.forEach((customer) => {        

            if(customer.cUsername == temp.username && customer.cPassword == temp.password)
            {
                var id = customer.customerID;
                var firstname = customer.cfName;
                localStorage.setItem("userID", id);
                localStorage.setItem("userFirstName", firstname);
                change_page_customerNavigation();
            }
            else if(customer.cUsername != temp.username && customer.cPassword == temp.password)
            {
                let html = "";
                html += '<p><strong>There is no account with that username.</strong></p>';
                document.getElementById("error").innerHTML = html;
            }
            else if(customer.cUsername == temp.username && customer.cPassword != temp.password)
            {
                let html = "";
                html += '<p><strong>Incorrect password. Please try again.</strong></p>';
                document.getElementById("error").innerHTML = html;
            }
            
        })

        

    });
}

function change_page_customerNavigation(){
    window.location.href = "customerNavigation.html";
}