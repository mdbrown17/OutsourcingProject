function checkLogin()
{
    console.log("made it here");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

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

            console.log(customer.customerid);

            if(customer.cUsername == temp.username && customer.cPassword == temp.password)
            {
                change_page_customerAccount();
            }

        })

    });
}

function change_page_customerAccount(){
    window.location.href = "customerAccount.html";
}